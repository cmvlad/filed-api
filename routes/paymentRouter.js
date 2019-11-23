/* eslint-disable no-param-reassign */
const express = require('express');
const paymentController = require('../controllers/paymentController');

function routes(Payment) {
  const bookRouter = express.Router();
  const controller = paymentController(Payment);
  bookRouter.route('/payment')
    .post(controller.post);
  return bookRouter;
}

module.exports = routes;
