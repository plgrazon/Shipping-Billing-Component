const { BillingRate } = require('../../db/schema/billingSchema');

const billingShippingCtrl = {
  get: function(req, res) {
    BillingRate.findOne({
      where: {
        country: req.query.country
      }
    })
    .then(data => {
      console.log('data fetched');
      res.status(201).send(data);
    })
    .catch(err => {
      console.log('error getting data ', err);
      res.status(401);
    });
  },
  post: function(req, res) {
    console.log('what is req.body in post method? ', req.body);
    res.send('posted');
  }
}

module.exports = {
  billingShippingCtrl: billingShippingCtrl
}
