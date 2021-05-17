const app = require('./server.js');
const { db } = require('./db/index');
const PORT = process.env.PORT || 3000;
const seed = require('../seed.js');

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
    return seed();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(error => console.log('error syncing db', error));
