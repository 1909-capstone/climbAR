const router = require('express').Router();
const { models } = require('../db');
const { RouteModel, ClimbingRoute, Hold } = models;

//get all climbing routes
router.get('/', (req, res, next) => {
  RouteModel.findAll()
    .then(models =>
      Holds.findAll().then(({ dataValues }) =>
        res
          .status(200)
          .send(models.map((_m, i) => ({ ..._m, hold: dataValues[i] })))
      )
    )
    .catch(e => {
      console.log('error loading route models');
      console.log(e);
      res.status(400);
      next(e);
    });
});

//create a new climbing route
router.post('/new', (req, res, next) => {
  console.log('POSTING NEW ROUTE');
  console.log(req.body);
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
    status: 'installed',
    endDate,
    holdColor
  })
    .then(newRoute => {
      console.log('NEW CLIMBING ROUTE CREATED');
      const routeModels = Promise.all(
        holds.map(_hold =>
          RouteModel.create({
            holdId: _hold.id,
            positionX: _hold.coordinateX,
            positionY: _hold.coordinateY,
            positionZ: _hold.coordinateZ,
            climbingRouteId: newRoute.id
          })
        )
      );
      return routeModels;
    })
    .then(models => res.status(200).send({ models }))
    .catch(e => {
      res.status(400);
      console.log(e);
      next(e);
    });
});

module.exports = router;
