const router = require('express').Router();
const { models } = require('../db/index');
const { User, Session } = models;

// log in
router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.state(401).send('User not found');
      } else {
        return res.status(200).send(user);
      }
    })
    .catch(e => {
      res.status(500).send('Internal Error');
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
  User.create(newUser)
    .then(createdUser => res.status(201).send(createdUser))
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
