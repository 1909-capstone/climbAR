const Sequelize = require('sequelize');
const db = require('../database');

const { UUID, UUIDV4, DATEONLY } = Sequelize;

const CompletedRoute = db.define('completedRoute', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  },
  completeDate: {
    type: DATEONLY
  }
});

module.exports = CompletedRoute;
