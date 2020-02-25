const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, DECIMAL, BOOLEAN } = Sequelize;

//TO DO: define holding surface direction?
const RouteModel = db.define('routeModel', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  coordinateX: {
    type: DECIMAL,
    allowNull: false
  },
  coordinateY: {
    type: DECIMAL,
    allowNull: false
  },
  coordinateZ: {
    type: DECIMAL,
    allowNull: false
  },
  isStart: {
    type: BOOLEAN
  },
  isFinish: {
    type: BOOLEAN
  }
});

module.exports = RouteModel;
