const router = require('express').Router();
const bcrypt = require('bcrypt');
const chalk = require('chalk');
const { models } = require('../db');
const {
  User,
  Session,
  LikedRoute,
  CompletedRoute,
  Rating,
  ClimbingRoute,
  RouteModel,
  Video
} = models;

//get user by token
router.get('/token/:token', (req, res, next) => {
  User.findOne({where: {token: req.params.token}}).then(user => user ? res.status(200).send(user) : res.status(404).send('User not found')).catch(err => return res.status(500).send({error: err}))
});

// set user in state
router.get('/session/:sessionId', (req, res, next) => {
  console.log(chalk.cyan('params is: ', req.params.sessionId));
  if (!req.params.sessionId) {
    console.log(chalk.cyan('returning 404'));
    return res.status(404).send({});
  }
  const { sessionId } = req.params;
  User.findOne({
    where: {
      sessionId
    },
    include: [
      { model: LikedRoute },
      { model: CompletedRoute },
      { model: Video }
    ]
  })
    .then(user => {
      console.log(chalk.cyan('user is: ', user));
      if (!user) {
        return res.status(404).send({});
      }
      Promise.all(
        user.completedRoutes.map(_r =>
          ClimbingRoute.findByPk(_r.climbingRouteId, {
            include: [
              { model: RouteModel },
              {
                model: CompletedRoute,
                required: false
              },
              { model: LikedRoute, required: false },
              { model: Rating, required: false }
            ]
          })
        )
      )
        .then(completedRouteInfo => {
          return res
            .cookie('session_id', user.sessionId, {
              path: '/',
              expires: new Date(Date.now() + 1000 * 60 * 60)
            })
            .status(202)
            .send({ user, completedRouteInfo });
        })
        .catch(e => {
          console.log(
            chalk.cyan('found a user, but not able to read a cookie', e)
          );
          res.status(400);
          next(e);
        });
    })
    .catch(e => {
      console.log(chalk.cyan('error on looking for a user', e));
      res.status(400);
      next(e);
    });
});

// log in
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    },
    include: [
      { model: LikedRoute },
      { model: CompletedRoute },
      { model: Video }
    ]
  })
    .then(user => {
      if (!user) {
        return res.status(401).send('User not found');
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (err) {
            console.log(err);
          }
          if (result) {
            //user is found in database and given a new cookie
            Session.create().then(session => {
              user.update({ sessionId: session.id }).then(() => {
                Promise.all(
                  user.completedRoutes.map(_r =>
                    ClimbingRoute.findByPk(_r.climbingRouteId, {
                      include: [
                        { model: RouteModel },
                        {
                          model: CompletedRoute,
                          required: false
                        },
                        { model: LikedRoute, required: false },
                        { model: Rating, required: false }
                      ]
                    })
                  )
                )
                  .then(completedRouteInfo => {
                    return res
                      .cookie('session_id', user.sessionId, {
                        path: '/',
                        expires: new Date(Date.now() + 1000 * 60 * 60)
                      })
                      .status(202)
                      .send({ user, completedRouteInfo });
                  })
                  .catch(e => {
                    console.log(e);
                    res.status(400);
                    next(e);
                  });
              });
            });
          } else {
            return res.status(401).send('Incorrect password');
          }
        });
      }
    })
    .catch(e => {
      console.log(e);
      res.status(500);
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
      where: { id },
      returning: true,
      plain: true
    }
  )
    .then((numOfUser, loggoutUser) => {
      console.log(chalk.cyan('logging out user'));
      res.status(201).send(loggoutUser);
    })
    .catch(e => {
      console.log('ERROR LOGING OUT USER');
      console.log(e);
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

//like a route
router.post('/routes/like', (req, res, next) => {
  const { user, route } = req.body;
  LikedRoute.create({ climbingRouteId: route.id, userId: user.id })
    .then(() => res.status(201).send('route liked'))
    .catch(e => {
      console.log('error liking route ', e);
      res.status(400);
      next(e);
    });
});

//mark a route completed
router.post('/routes/complete', (req, res, next) => {
  const { user, route } = req.body;
  CompletedRoute.create({
    climbingRouteId: route.id,
    userId: user.id,
    completeDate: new Date()
  })
    .then(() => res.status(201).send('route marked complete'))
    .catch(e => {
      console.log('error marking route complete', e);
      res.status(400);
      next(e);
    });
});

router.delete('/routes/unlike', (req, res, next) => {
  const { user, route } = req.body;
  LikedRoute.destroy({ where: { userId: user.id, climbingRouteId: route.id } })
    .then(() => res.status(200).send('route unliked'))
    .catch(e => {
      console.log('error unliking route ', e);
      res.status(400);
      next(e);
    });
});

router.delete('/routes/uncomplete', (req, res, next) => {
  const { user, route } = req.body;
  CompletedRoute.destroy({
    where: { userId: user.id, climbingRouteId: route.id }
  })
    .then(() => res.status(200).send('route un completed'))
    .catch(e => {
      console.log('error uncompleting route ', e);
      res.status(400);
      next(e);
    });
});

router.post('/routes/rate', (req, res, next) => {
  const { user, route, rating } = req.body;
  Rating.findOne({
    where: { userId: user.id, climbingRouteId: route.id }
  })
    .then(foundRating => {
      if (foundRating) {
        Rating.destroy({
          where: { userId: user.id, climbingRouteId: route.id }
        }).then(() =>
          Rating.create({ userId: user.id, climbingRouteId: route.id, rating })
        );
      } else {
        return Rating.create({
          userId: user.id,
          climbingRouteId: route.id,
          rating
        });
      }
    })
    .then(() => res.status(200).send('Rating submitted'))
    .catch(e => {
      console.log(e);
      next(e);
    });
});

module.exports = router;
