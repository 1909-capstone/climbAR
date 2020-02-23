const router = require('express').Router();
const { models } = require('../db');
const { RouteModel, ClimbingRoute } = models;

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
  const {
    areaWidth,
    areaHeight,
    grade,
    status,
    endDate,
    holdColor,
    holds
  } = req.body;
  ClimbingRoute.create({
    areaWidth,
    areaHeight,
    grade,
    status,
    endDate,
    holdColor
  })
    .then(newRoute => {
      const routeModels = Promise.all(
        holds.map(_hold => RouteModel.create({ ..._hold }))
      );
      return routeModels;
    })
    .then(models => res.status(200).send({ models }))
    .catch(e => {
      res.status(400);
      next(e);
    });
});

module.exports = router;
