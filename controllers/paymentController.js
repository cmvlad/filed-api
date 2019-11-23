function paymentController(Payment) {
  function post(req, res) {
    const payment = new Payment(req.body);
    if (!req.body) {
      res.status(400);
      return res.send('Please attach a payment object');
    }
    res.status(201);
    return res.json(payment);
  }
  return { post };
}

module.exports = paymentController;
