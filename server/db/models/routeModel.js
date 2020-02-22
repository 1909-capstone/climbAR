const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, DECIMAL, BOOLEAN } = Sequelize;

//TO DO: define holding surface direction?
const RouteModel = db.define('routeModel', {
  holdId: {
    type: UUID,
    allowNull: false
  },
  climbingRouteId: {
    type: UUID,
    allowNull: false
  },
  coordinateX: {
    type: DECIMAL
  },
  coordinateY: {
    type: DECIMAL
  },
  coordinateZ: {
    type: DECIMAL
  },
  isStart: {
    type: BOOLEAN
  },
  isFinish: {
    type: BOOLEAN
  }
});

module.exports = RouteModel;
