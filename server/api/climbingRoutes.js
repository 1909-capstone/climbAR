const router = require('express').Router();
const { models } = require('../db');
const { ClimbingRoute, RouteModel, CompletedRoute } = models;

//finds and gets all the climbing routes in the database
router.get('/', (req, res, next) => {
  console.log('requesting climbing routes for user = ', req.user);
  ClimbingRoute.findAll({
    include: [
      { model: RouteModel },
      { model: CompletedRoute, where: { userId: req.user.id }, required: false }
    ]
  })
    .then(allRoutes => res.status(200).send(allRoutes))
    .catch(e => {
      console.log(e);
      res.status(404);
      next(e);
    });
});

//finds a climbing route by id
router.get('/:id', (req, res, next) => {
  const climbingRouteId = req.params.id;
  ClimbingRoute.findByPk(climbingRouteId, { include: { model: RouteModel } })
    .then(foundClimbingRoute => res.status(200).send(foundClimbingRoute))
    .catch(e => {
      console.log(e);
      res.status(404);
      next(e);
    });
});

module.exports = router;
