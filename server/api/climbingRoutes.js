const router = require('express').Router();
const { models } = require('../db');
const { ClimbingRoute, RouteModel } = models;

//finds and gets all the climbing routes in the database
router.get('/', (req, res, next) => {
  ClimbingRoute.findAll({
    include: [{ model: RouteModel }]
  })
    .then(allRoutes => res.status(200).send(allRoutes))
    .catch(e => {
      console.log(e);
      res.status(404);
      next(e);
    });
});

//finds a specific climbing route in the database id
router.get('/:id', (req, res, next) => {
  const climbingRouteId = req.params.id;
  ClimbingRoute.findByPk(climbingRouteId, { include: [RouteModel] })
    .then(foundClimbingRoute => res.status(200).send(foundClimbingRoute))
    .catch(e => {
      console.log(e);
      res.status(404);
      next(e);
    });
});

module.exports = router;
