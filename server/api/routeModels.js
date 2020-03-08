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
  const { grade, status, endDate, holdColor, sorted_holds } = req.body;
  const sorted_holds_array = [];
  for (let key in sorted_holds) {
    sorted_holds_array.push(sorted_holds[key]);
  }
  ClimbingRoute.create({
    grade,
    status: 'installed',
    endDate,
    holdColor
  })
    .then(newRoute => {
      const routeModels = Promise.all(
        sorted_holds_array.map(_hold => {
          if (_hold.holdType === 'sloper (sphere)') {
            RouteModel.create({
              holdId: _hold.id,
              positionX: _hold.coordinateX,
              positionY: _hold.coordinateY,
              positionZ: _hold.coordinateZ,
              climbingRouteId: newRoute.id,
              thetaLength: 360,
              thetaStart: 0,
              scaleZ: 2
            });
          } else if (_hold.holdType === 'sloper (box)') {
            RouteModel.create({
              holdId: _hold.id,
              positionX: _hold.coordinateX,
              positionY: _hold.coordinateY,
              positionZ: _hold.coordinateZ,
              climbingRouteId: newRoute.id,
              scaleZ: 2,
              height: 0.3
            });
          } else if (_hold.holdType === 'jug') {
            RouteModel.create({
              holdId: _hold.id,
              positionX: _hold.coordinateX,
              positionY: _hold.coordinateY,
              positionZ: _hold.coordinateZ,
              climbingRouteId: newRoute.id,
              thetaLength: 120,
              thetaStart: 90
            });
          } else if (_hold.holdType === 'footHold') {
            RouteModel.create({
              holdId: _hold.id,
              positionX: _hold.coordinateX,
              positionY: _hold.coordinateY,
              positionZ: _hold.coordinateZ,
              climbingRouteId: newRoute.id,
              radius: 0.03
            });
          } else {
            RouteModel.create({
              holdId: _hold.id,
              positionX: _hold.coordinateX,
              positionY: _hold.coordinateY,
              positionZ: _hold.coordinateZ,
              climbingRouteId: newRoute.id
            });
          }
        })
      );
      return res.status(200).send(newRoute)
    })
    // .then(() => res.status(200).send(newRoute))
    .catch(e => {
      res.status(400);
      console.log(e);
      next(e);
    });
});

module.exports = router;
