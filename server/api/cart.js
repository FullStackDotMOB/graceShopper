const router = require('express').Router();
module.exports = router;
const {
  models: { Order, User, Order_item, Product },
} = require('../db');

//Unfullfied Order
router.get('/', async (req, res, next) => {
  try {
    const cart = await Order.findAll({
      where: {
        complete: false,
      },
    });
    console.log('Magic Methods Order', Object.keys(Order.prototype));
    res.send(cart);
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    // Can Eager loading can be applied in this sitution
    const allItemsInCart = await Product.findAll({
      where: {
        model: Order,
        Order_item: req.params.OrderId,
      },
    });
    const cartUpdate = await Order.findByPk(req.params.id);
    res.send(await Order.update(req.body));
  } catch (error) {
    next(error);
  }
});

// Can Eager loading be applied in this sitution
