const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentModel = new Schema(
  {
    id: { type: Number },
    creditCardNumber: { type: String },
    cardholder: { type: String },
    expirationDate: { type: Date },
    securityCode: { type: String },
    amount: { type: Number },
  }
);

module.exports = mongoose.model('Book', paymentModel);
