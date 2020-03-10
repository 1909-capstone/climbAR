const router = require('express').Router();
const { models } = require('../db');
const { RouteModel, ClimbingRoute, Hold, RouteImage } = models;

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

router.put('/edit', async (req, res, next) => {
  const { grade, status, endDate, holdColor, holds, id } = req.body;
  try {
    await ClimbingRoute.update(
      { grade, status, endDate, holdColor },
      { where: { id } }
    );
  } catch (e) {
    console.log('error updating climbing route');
    console.log(e);
    if (e) res.status(400);
    next(e);
    return;
  }
  try {
    await RouteImage.destroy({ where: { climbingRouteId: id } });
  } catch (e) {
    console.log('error deleting route image');
    console.log(e);
    res.status(400);
    next(e);
    return;
  }
  try {
    await RouteModel.destroy({ where: { climbingRouteId: id } });
  } catch (e) {
    console.log('error deleting route models');
    console.log(e);
    res.status(400);
    next(e);
    return;
  }
  Promise.all(
    holds.map(_hold =>
      RouteModel.create({
        holdId: _hold.id,
        positionX: _hold.coordinateX,
        positionY: _hold.coordinateY,
        positionZ: _hold.coordinateZ,
        climbingRouteId: id,
        thetaLength: 360,
        thetaStart: 0,
        scaleZ: 2
      })
    )
  )
    .then(models => res.status(200).send(models))
    .catch(e => {
      console.log('error creating route models');
      console.log(e);
      res.status(400);
      next(e);
    });
});

//create a new climbing route
router.post('/new', (req, res, next) => {
  const { grade, status, endDate, holdColor, holds } = req.body;
  ClimbingRoute.create({
    grade,
    status: 'installed',
    endDate,
    holdColor
  })
    .then(newRoute => {
      const routeModels = Promise.all(
        holds.map(_hold => {
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
    .catch(e => {
      res.status(400);
      console.log(e);
      next(e);
    });
});

module.exports = router;
