const router = require('express').Router();
module.exports = router;
const {
  models: { Order, User, OrderItem, Product },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      where: {
        complete: false,
      },
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
