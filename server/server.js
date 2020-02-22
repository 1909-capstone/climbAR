const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { models } = require('./db/index')
const { Session, User } = models;

app.use(express.json());
app.use(cookieParser());

app.use((req,res, next) => {
  if(!req.cookies['session_id']){
    try{
      console.log('no cookie');
      res.send('Log in first')
    }catch(err){
      console.log(err);
      res.status(404)
    }
  }else {
    User.findOne({
      where: {
        sessionId: req.cookies['session_id']
      }
    })
    .then(user => {
      if(!user) {
        Session.create()
        .then(session => {
          req.cookies.session_id = session.id;
          res.statu(401).send('Log in first')
        })
        .catch( e=> {
          res.status(404)
        })
      }else{
        req.user = user.dataValues;
        next();
      }
      
    })
    .catch( e => {
      res.status(404)
    })
  }
})

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
