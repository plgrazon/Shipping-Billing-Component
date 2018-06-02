const Sequelize = require('sequelize');

const { db } = require('../config');

const { seeds } = require('../sql/seed');

const BillingRate = db.define('billing_rate', {
  country: Sequelize.STRING,
  basic_rate: Sequelize.INTEGER,
  expedited_rate: Sequelize.INTEGER,
  one_day_rate: Sequelize.INTEGER
});

BillingRate.sync({force: true})
  .then(() => {
    BillingRate.bulkCreate(seeds);
    console.log('tables created');
  })
  .catch(err => {
    console.log('error connecting to database ', err);
  })


module.exports = {
  BillingRate: BillingRate
}
