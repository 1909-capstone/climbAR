const router = require('express').Router();
const { models } = require('../db');
const {
  ClimbingRoute,
  RouteModel,
  CompletedRoute,
  LikedRoute,
  Rating,
<<<<<<< HEAD
  Hold
=======
  Video
>>>>>>> 7e620f31756d72cd3c77319276b81e516ddc5b02
} = models;

//finds and gets all the climbing routes in the database
router.get('/', (req, res, next) => {
  ClimbingRoute.findAll({
    include: [
      { model: RouteModel },
      {
        model: CompletedRoute,
        required: false
      },
      { model: LikedRoute, required: false },
      { model: Rating, required: false },
      { model: Video, required: false }
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
  ClimbingRoute.findByPk(climbingRouteId, { include: [{ model: RouteModel }, , { model: Video, required: false }] })
    .then(route => {
      console.log('route models = ', route.dataValues.routeModels);
      Hold.findAll().then(hold => {
        return res.status(200).send({
          ...route.dataValues,
          routeModels: route.dataValues.routeModels.map(({ dataValues }) => ({
            ...dataValues,
            hold: hold.filter(_h => _h.dataValues.id === dataValues.holdId)[0]
          }))
        });
      });
    })
    .catch(e => {
      console.log(e);
      res.status(404);
      next(e);
    });
});

module.exports = router;
