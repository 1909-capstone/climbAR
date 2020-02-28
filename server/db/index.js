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

//Route Model
Hold.belongsToMany(ClimbingRoute, {
  through: { model: RouteModel, unique: false }
});
ClimbingRoute.hasMany(Hold);
ClimbingRoute.hasMany(RouteModel);

ClimbingRoute.belongsToMany(User, { through: Rating });
User.hasMany(ClimbingRoute);
ClimbingRoute.hasMany(Rating);

ClimbingRoute.belongsToMany(User, { through: CompletedRoute });
User.hasMany(ClimbingRoute);
ClimbingRoute.hasMany(CompletedRoute);
User.hasMany(CompletedRoute);

ClimbingRoute.belongsToMany(User, { through: LikedRoute });
ClimbingRoute.hasMany(LikedRoute);
User.hasMany(LikedRoute);

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
