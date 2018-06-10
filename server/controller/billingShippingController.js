const { BillingRate } = require('../../db/schema/billingSchema');

const requestPromise = require('request-promise');

const billingShippingCtrl = {
  get: function(req, res) {

    if (req.country === 'United States of America') {
      const options = {
        url: `http://api.zippopotam.us/us/${req.query.zipcode}`,
        json: true
      };

      let state;

      requestPromise(options)
      .then(data => {
        state = data['places'][0]['state abbreviation'];
        console.log(state)
      })
      .catch(err => {
        console.log(err);
      });      
    }

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
    console.log('testing post');
    res.send('posted');
  }
}

module.exports = {
  billingShippingCtrl: billingShippingCtrl
};
