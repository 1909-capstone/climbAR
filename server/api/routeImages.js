const router = require('express').Router();
const { models } = require('../db');
const { RouteImage } = models;

router.get('/',(req,res,next) => {
  RouteImage.findAll()
  .then((allRouteImages) => res.status(200).send(allRouteImages))
  .catch(e => {
    res.status(404);
    next(e)
  })
})

module.exports = router; 