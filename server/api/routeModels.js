const router = require('express').Router();
const { models } = require('../db');
const { RouteModel } = models;

//get all climbing routes
router.get('/', (req, res, next) => {
  RouteModel.findAll()
    .then(m => res.status(200).send(m))
    .catch(e => {
      res.status(400);
      next(e);
    });
});

//create a new climbing route
router.post('/new', (req, res, next) => {
  RouteModel.create(req.body.model)
    .then(m => res.status(200).send({ m }))
    .catch(e => {
      res.status(400);
      next(e);
    });
});

module.exports = router;
