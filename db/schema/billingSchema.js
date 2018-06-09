const Sequelize = require('sequelize');

const { db } = require('../config');

const { zips, seeds } = require('../sql/seed');

const BillingRate = db.define('billing_rate', {
  country: Sequelize.STRING,
  basic_rate: Sequelize.INTEGER,
  expedited_rate: Sequelize.INTEGER,
  one_day_rate: Sequelize.INTEGER
});

const ZipCode = db.define('zip_code', {
  zip: Sequelize.INTEGER,
  city: Sequelize.STRING,
  state: Sequelize.STRING
});

BillingRate.sync({force: true})
  .then(() => {
    BillingRate.bulkCreate(seeds);
    console.log('table created for billingrate');
  })
  .catch(err => {
    console.log('error connecting to database ', err);
  });

ZipCode.sync({force: true})
  .then(() => {
    ZipCode.bulkCreate(zips);
    console.log('table created for zipcode');
  })
  .catch(err => {
    console.log('error connecting to database');
  });


module.exports = {
  BillingRate: BillingRate,
  ZipCode: ZipCode
};
