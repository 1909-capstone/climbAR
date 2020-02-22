const { users, holds, climbingRoutes } = require('./seed-data.js');
const { User, Hold, ClimbingRoute } = require('./server/db/models/index.js');

const seed = async () => {
  await Promise.all(users.map(user => User.create(user)));
  await Promise.all(holds.map(hold => Hold.create(hold)));
  await Promise.all(
    climbingRoutes.map(climbingRoute => ClimbingRoute.create(climbingRoute))
  );
};

module.exports = seed;
