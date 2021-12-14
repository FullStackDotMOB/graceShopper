const router = require('express').Router();
const {
  models: { User, Order, OrderItem, Product },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:userId', async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.userId);
    res.send(singleUser);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId/cart', async (req, res, next) => {
  try {
    const cart = await Order.findOne({
      where: {
        complete: false,
        userId: parseInt(req.params.userId),
      },
      include: [
        {
          model: OrderItem,
          include: [
            {
              model: Product,
            },
          ],
        },
      ],
    }); //Test to see if cart exist send back 404 error
    console.log('cart', cart);
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
