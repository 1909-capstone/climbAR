const { users, holds, climbingRoutes } = require('./seed-data.js');
const { routeModels } = require('./rm.js');
const {
  User,
  Hold,
  ClimbingRoute,
  RouteModel,
  CompletedRoute
} = require('./server/db/models/index.js');

const seed = async () => {
  const newusers = await Promise.all(users.map(user => User.create(user)));
  const newHolds = await Promise.all(holds.map(hold => Hold.create(hold)));
  const newRoutes = await Promise.all(
    climbingRoutes.map(climbingRoute => ClimbingRoute.create(climbingRoute))
  );
  //climbingRoute Id is found by matching grade and color
  //hold Id is found by matching hold type
  let currentClimbingRoute = 0;
  let currentGrade = 'V0';
  await Promise.all(
    routeModels.map((_r, i) => {
      if (_r.routeGrade !== currentGrade) {
        currentGrade = _r.routeGrade;
        currentClimbingRoute++;
      }
      const holdId = newHolds.filter(hold => {
        return hold.holdType === _r.holdType;
      })[0].id;
      const climbingRouteId = newRoutes[currentClimbingRoute].id;
      let newR = {};
      Object.keys(_r).forEach(key => {
        if (key !== 'holdType' && key !== 'routeGrade') {
          newR[key] = _r[key];
        }
      });
      return RouteModel.create({
        ...newR,
        climbingRouteId,
        holdId
      });
    })
  );

  newusers.forEach(async _u => {
    await Promise.all(
      newRoutes.map(_r =>
        CompletedRoute.create({ userId: _u.id, climbingRouteId: _r.id })
      )
    );
    console.log('seeded complted routes for ', _u.email);
  });
};

module.exports = seed;
