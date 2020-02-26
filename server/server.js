const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { models } = require('./db/index');
const { Session, User } = models;
const morgan = require('morgan');
const chalk = require('chalk');

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', (req, res) => {
  console.log(chalk.green('hitting on login route before all other routes'));
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((req, res, next) => {
  console.log(chalk.green('validating user'));

  if (!req.cookies['session_id'] || !req.cookies) {
    //status: user doesn't have a cookie id
    req.loggedIn = false;
    console.log(chalk.green('no cookie'));
    if (req.url.includes('/signup') || Object.keys(req.body).length !== 0) {
      //status: user is on sign up page or req.body has login input
      req.loggedIn = true;
      next();
    } else {
      //status: user is not on sign up page and req.body is empty
      //action: redirect user to login page
      console.log(chalk.green('redirecting to login'));
      return res.redirect('/login');
    }
  } else {
    //status: user has a cookie, but not sure if it's active
    console.log(chalk.green('yes cookie'));

    User.findOne({
      where: {
        sessionId: req.cookies['session_id']
      }
    })
      .then(user => {
        if (!user) {
          //status: user has a cookie id, but login expired
          //action: user can sign up or log in, and overwrite current cookie
          console.log(
            chalk.yellow('user has cookie, but need to sign up or log in')
          );
          if (req.url.includes('/signup')) {
            req.loggedIn = true;
            next();
          } else {
            next();
          }
        } else {
          //status: user has a cookie id and he signed up already
          //action: update user's sessionId and renew the cookie id
          user.update({ sessionId: req.cookies.session_id }).then(() => {
            res.user = user.dataValues;
          });
          req.loggedIn = true;
          console.log(chalk.yellow('user logged in'));
          next();
        }
      })
      .catch(e => {
        res.status(404);
      });
  }
});

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  console.log('all routes');
  if (!req.loggedIn) {
    return res.redirect('/login');
  }
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Error-handling endware
app.use('/', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message } || 'Internal server error');
});

module.exports = app;
