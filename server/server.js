const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { models } = require('./db/index');
const { Session, User } = models;

app.use(express.json());
app.use(cookieParser());
/*
app.use((req, res, next) => {
  if (!req.cookies['session_id']) {
    try {
      //status: user doesn't have a cookie id
      //action: send user to log in form
      next();
    } catch (err) {
      console.log(err);
      res.status(404);
    }
  } else {
    User.findOne({
      where: {
        sessionId: req.cookies['session_id']
      }
    })
      .then(user => {
        if (!user) {
          //status: user has a cookie id, but not sign up yet
          //action: update session id with cookie id
          //action: send user to sign up form
          next();
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
*/
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '../public')));

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
