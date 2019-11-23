const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


const port = process.env.PORT || 3000;
const payment = require('./models/paymentModel');
const bookRouter = require('./routes/paymentRouter')(payment);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
