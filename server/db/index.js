const db = require('./database');
const {
  User,
  ClimbingRoute,
  Wall,
  Hold,
  Rating,
  Video,
  Session
} = require('./models/index');

//MODEL ASSOCIATIONS
Wall.hasMany(ClimbingRoute);
ClimbingRoute.belongsTo(Wall);

ClimbingRoute.hasMany(Hold);
Hold.belongsTo(ClimbingRoute);

ClimbingRoute.hasMany(Rating);
Rating.belongsTo(ClimbingRoute);

Session.hasOne(User);
User.belongsTo(Session);

//TO DO: define association between Route, User and Video

module.exports = {
  db,
  models: {
    User,
    ClimbingRoute,
    Wall,
    Hold,
    Rating,
    Video,
    Session
  }
};
