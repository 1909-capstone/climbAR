const Sequelize = require('sequelize');
const db = require('./../database');

const { UUID, UUIDV4, DECIMAL, STRING } = Sequelize;

const RouteModel = db.define('routeModel', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  routeGrade: {
    type: STRING
  },
  holdColor: {
    type: STRING
  },
  holdType: {
    type: STRING
  },
  holdModelType: {
    type: STRING,
    allowNull: false
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
    allowNull: false
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
    type: DECIMAL
  },
  scaleY: {
    type: DECIMAL
  },
  scaleZ: {
    type: DECIMAL
  },
  roughness: {
    type: DECIMAL
  },
  modelColor: {
    type: STRING
  },
  radius: {
    type: DECIMAL
  },
  arc: {
    type: DECIMAL
  },
  radiusTubular: {
    type: DECIMAL
  },
  thetaLength: {
    type: DECIMAL
  },
  thetaStart: {
    type: DECIMAL
  },
  depth: {
    type: DECIMAL
  },
  height: {
    type: DECIMAL
  },
  width: {
    type: DECIMAL
  }
});

module.exports = RouteModel;
