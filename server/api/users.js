const router = require('express').Router();
const bcrypt = require('bcrypt');
const chalk = require('chalk');
const { models } = require('../db');
const { User, Session } = models;

// set user in state
router.get('/session/:sessionId', (req, res, next) => {
  const { sessionId } = req.params;
  User.findOne({
    where: {
      sessionId
    }
  })
    .then(user => {
      console.log(
        chalk.yellow('calling get session api and found user by session id')
      );
      console.log(user.dataValues);
      res.status(200).send(user);
    })
    .catch(e => {
      res.status(400);
      next(e);
    });
});

// log in
router.post('/login', (req, res, next) => {
  console.log(chalk.yellow('calling post login api'));
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        console.log(chalk.green('user not found'));
        return res.state(401).send('User not found');
      } else {
        console.log(chalk.green('found user in database'));
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            console.log(err);
          }
          if (result) {
            //user is found in database and given a new cookie
            Session.create().then(session => {
              user.update({ sessionId: session.id }).then(() => {
                console.log(chalk.green('session id is created'));
                return res
                  .cookie('session_id', user.sessionId, {
                    path: '/',
                    expires: new Date(Date.now() + 1000 * 60 * 60)
                  })
                  .status(202)
                  .send(user);
              });
            });
          } else {
            return res.status(401).send('Incorrect password');
          }
        });
      }
    })
    .catch(e => {
      res.status(500).send('Internal Error');
      next(e);
    });
});

//log out
router.post('/logout/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.update(
    {
      sessionId: null
    },
    {
      where: { id }
    }
  )
    .then(loggoutUser => res.status(201).send(loggoutUser))
    .catch(e => {
      res.status(401);
      next(e);
    });
});

//finds and gets all the users in the database
router.get('/', (req, res, next) => {
  User.findAll()
    .then(allUsers => res.status(200).send(allUsers))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//adds a new user to the database
router.post('/', (req, res, next) => {
  const newUser = req.body;
  bcrypt
    .hash(newUser.password, 10)
    .then(hashedPassword => {
      return User.create({
        ...newUser,
        password: hashedPassword
      });
    })
    .then(user => {
      Session.create().then(session => {
        user.update({ sessionId: session.id }).then(() => {
          console.log('new user with session id is created');
          return res
            .cookie('session_id', user.sessionId, {
              path: '/',
              expires: new Date(Date.now() + 1000 * 60 * 60)
            })
            .status(201)
            .send(user);
        });
      });
    })
    .catch(e => {
      res.status(400);
      next(e);
    });
});

//finds and get all 'Admin' type users in the database
router.get('/admin', (req, res, next) => {
  User.findAll({
    where: {
      userType: 'Admin'
    }
  })
    .then(adminUsers => res.status(200).send(adminUsers))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//finds and get all 'Climber' type users in the database
router.get('/climber', (req, res, next) => {
  User.findAll({
    where: {
      userType: 'Climber'
    }
  })
    .then(climbers => res.status(200).send(climbers))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

//finds and gets the specific user associated with their userId
router.get('/:id', (req, res, next) => {
  const userId = req.params.id;
  User.findByPk(userId)
    .then(foundUser => res.status(200).send(foundUser))
    .catch(e => {
      res.status(404);
      next(e);
    });
});

module.exports = router;
