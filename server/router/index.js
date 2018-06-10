const router = require('express').Router();

const { billingShippingCtrl } = require('../controller/billingShippingController');

router.route('/shipping')
  .get(billingShippingCtrl.get)
  .post(billingShippingCtrl.post);

module.exports = {
  router: router
};
