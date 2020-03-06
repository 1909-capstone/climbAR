const { users, holds, climbingRoutes, routeModels } = require('./seed-data.js');
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
  //hold Id is found by matching hold type and model type
  await Promise.all(
    routeModels.map((_r, i) => {
      return RouteModel.create({
        ..._r,
        climbingRouteId: newRoutes.filter(route => {
          return (
            route.grade === _r.routeGrade && route.holdColor === _r.holdColor
          );
        })[0].id,
        holdId: newHolds.filter(hold => {
          return (
            hold.holdType === _r.holdType && hold.modelType === _r.holdModelType
          );
        })[0].id
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
