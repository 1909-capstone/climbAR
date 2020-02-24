const db = require('./database');
const {
  User,
  ClimbingRoute,
  Wall,
  Hold,
  CompletedRoute,
  LikedRoute,
  Rating,
  Video,
  Session,
  RouteModel
} = require('./models/index');

//MODEL ASSOCIATIONS
Wall.hasMany(ClimbingRoute);
ClimbingRoute.belongsTo(Wall);

Hold.belongsToMany(ClimbingRoute, { through: RouteModel });
ClimbingRoute.hasMany(Hold);

ClimbingRoute.belongsToMany(User, { through: Rating });
User.hasMany(ClimbingRoute);

ClimbingRoute.belongsToMany(User, { through: CompletedRoute });
User.hasMany(ClimbingRoute);

ClimbingRoute.belongsToMany(User, { through: LikedRoute });
User.hasMany(ClimbingRoute);

ClimbingRoute.belongsToMany(User, { through: Video });
User.hasMany(ClimbingRoute);

Session.hasOne(User);
User.belongsTo(Session);

module.exports = {
  db,
  models: {
    User,
    ClimbingRoute,
    Wall,
    Hold,
    CompletedRoute,
    LikedRoute,
    Rating,
    Video,
    Session,
    RouteModel
  }
};
