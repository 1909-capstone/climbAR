const { users, holds, climbingRoutes, routeModels } = require('./seed-data.js');
const {
  User,
  Hold,
  ClimbingRoute,
  RouteModel
} = require('./server/db/models/index.js');

const seed = async () => {
  await Promise.all(users.map(user => User.create(user)));
  const newHolds = await Promise.all(holds.map(hold => Hold.create(hold)));
  const newRoutes = await Promise.all(
    climbingRoutes.map(climbingRoute => ClimbingRoute.create(climbingRoute))
  );
  await Promise.all(
    routeModels.map((_r, i) =>
      RouteModel.create({
        ...routeModels[i],
        climbingRouteId: newRoutes[0].id,
        holdId: newHolds[0].id
      })
    )
  );
};

module.exports = seed;
