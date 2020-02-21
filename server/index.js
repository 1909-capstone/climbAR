const app = require('./server.js');
const { db } = require('./db/index');
const PORT = process.env.PORT || 3000;

db.sync({ force: true })
  .then(() => {
    console.log('db synced');
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(error => console.log('error syncing db', error));
