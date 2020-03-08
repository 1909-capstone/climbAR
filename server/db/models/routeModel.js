const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, DECIMAL, STRING } = Sequelize;

const RouteModel = db.define('routeModel', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  positionX: {
    type: DECIMAL,
    allowNull: false
  },
  positionY: {
    type: DECIMAL,
    allowNull: false
  },
  positionZ: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: -0.95
  },
  rotationX: {
    type: DECIMAL
  },
  rotationY: {
    type: DECIMAL
  },
  rotationZ: {
    type: DECIMAL
  },
  scaleX: {
    type: DECIMAL,
    defaultValue: 1
  },
  scaleY: {
    type: DECIMAL,
    defaultValue: 1
  },
  scaleZ: {
    type: DECIMAL,
    defaultValue: 1
  },
  roughness: {
    type: DECIMAL,
    defaultValue: 2
  },
  modelColor: {
    type: STRING
  },
  radius: {
    type: DECIMAL,
    defaultValue: 0.1
  },
  arc: {
    type: DECIMAL,
    defaultValue: 360
  },
  radiusTubular: {
    type: DECIMAL,
    defaultValue: 0.009
  },
  thetaLength: {
    type: DECIMAL,
    defaultValue: 120
  },
  thetaStart: {
    type: DECIMAL,
    defaultValue: 90
  },
  depth: {
    type: DECIMAL,
    defaultValue: 0.1
  },
  height: {
    type: DECIMAL,
    defaultValue: 0.1
  },
  width: {
    type: DECIMAL,
    defaultValue: 0.1
  }
});

module.exports = RouteModel;
