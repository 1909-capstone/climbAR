const Sequelize = require('sequelize');
const db = require('../database');

const { UUID, UUIDV4 } = Sequelize;

const CompletedRoute = db.define('completedRoute', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4
  }
});

module.exports = CompletedRoute;
