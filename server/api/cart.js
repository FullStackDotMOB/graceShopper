const router = require('express').Router();
module.exports = router;
const {
  models: { Order, User, Order_item, Product },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const cart = await Order.findAll({});
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCart = await Order.addProducts();
    res.status(200).send(newCart);
  } catch (error) {
    next(error);
  }
});
