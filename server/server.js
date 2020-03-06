const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { models } = require('./db/index');
const { User, LikedRoute } = models;
const morgan = require('morgan');
const chalk = require('chalk');
const fileUpload = require('express-fileupload');

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

app.use(express.static(path.join(__dirname, '../public')));

// api endpoint for react to check its login status
app.get('/auth', (req, res, next) => {
  const body = { loggedIn: false };
  User.findOne({ where: { sessionId: req.cookies['session_id'] } })
    .then(user => {
      if (user) {
        body.loggedIn = true;
      }
      res.status(200).send(body);
    })
    .catch(e => {
      res.status(200).send(body);
    });
});

app.use((req, res, next) => {
  if (!req.cookies['session_id'] || !req.cookies) {
    //status: user doesn't have a cookie id
    req.loggedIn = false;
    next();
  } else {
    //status: user has a cookie, but not sure if it's active
    User.findOne({
      where: {
        sessionId: req.cookies['session_id']
      },
      include: [{ model: LikedRoute }]
    })
      .then(user => {
        if (!user) {
          //status: user has a cookie id, but login expired
          //action: redirect user to login page
          // return res.redirect('/login');
          next();
        } else {
          //status: user has a cookie id and he signed up already
          //action: update user's sessionId and renew the cookie id
          user.update({ sessionId: req.cookies.session_id }).then(() => {
            res.user = user.dataValues;
          });
          req.loggedIn = true;
          req.user = user.dataValues;
          next();
        }
      })
      .catch(e => {
        console.log(e);
        res.status(404);
      });
  }
});

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//Error-handling endware
app.use('/', (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ message: err.message } || 'Internal server error');
});

module.exports = app;
