const Sequelize = require('sequelize');
const db = require('../database');

const { UUID, UUIDV4, STRING, BOOLEAN, DATEONLY } = Sequelize;

const ClimbingRoute = db.define('climbingRoute', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  grade: {
    type: STRING
  },
  holdColor: {
    type: STRING
  },
  areaHeight: {
    type: STRING
  },
  areaWidth: {
    type: STRING
  },
  status: {
    type: STRING,
    validate: {
      isIn: [['installed', 'pending', 'expired']]
    }
  },
  isLike: {
    type: BOOLEAN
  },
  endDate: {
    type: DATEONLY
  }
});

module.exports = ClimbingRoute;
