const Sequelize = require('sequelize');

const db = new Sequelize('postgres', 'postgres', '', {
  host: 'db',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('unable to connect to database ', err);
  })

module.exports = {
  db: db
};
