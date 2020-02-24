const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { models } = require('./db/index');
const { Session, User } = models;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/login', (req, res) => {
  console.log('hitting on login route');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((req, res, next) => {
  console.log('validating user');
  if (!req.cookies || !req.cookies['session_id']) {
    //status: user doesn't have a cookie id
    //action: send user to login page
    req.loggedIn = false;
    console.log('redirecting');
    if (req.body) {
      return res.send(req.body);
    } else {
      res.redirect('/login');
    }
  } else {
    //status: user has a cookie, but not sure if it's active
    console.log('yes cookie');
    console.log(res.cookies);
    User.findOne({
      where: {
        sessionId: req.cookies['session_id']
      }
    })
      .then(user => {
        if (!user) {
          //status: user has a cookie id, but login expired
          //action: send user to login page
          res.redirect('/login');
        } else {
          //status: user has a cookie id and he signed up already
          //action: update user's sessionId and renew the cookie id
          user.update({ sessionId: req.cookies.session_id }).then(() => {
            req.user = user.dataValues;
          });
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
