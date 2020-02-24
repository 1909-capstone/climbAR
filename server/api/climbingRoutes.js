const router = require('express').Router();
const { models } = require('../db');
const { ClimbingRoute, RouteModel } = models;

//finds and gets all the climbing routes in the database
router.get('/', (req, res, next) => {
  ClimbingRoute.findAll({include: [RouteModel]})
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
  ClimbingRoute.findByPk(climbingRouteId, {include: [RouteModel]})
    .then(foundFoundClimbingRoute => res.status(200).send(foundFoundClimbingRoute))
    .catch(e => {
      console.log(e);
      res.status(404);
      next(e);
    });
});

module.exports = router;
