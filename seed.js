const { users } = require('./seed-data.js');
const { User } = require('./server/db/models/index.js');

const seed = async () => {
  await Promise.all(users.map(user => User.create(user)));
};

module.exports = seed;
