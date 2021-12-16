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

router.post('/:userId/cart/:productId', async (req, res, next) => {
  try {
    let cart = await Order.findOne({
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
    //if the below find method finds the that the product we want to add is already in the cart it will return the element that the product is contained in (which will be an object)
    const itemInCart = cart.orderItems.find(
      (orderItem) => orderItem.productId == req.params.productId
    );

    if (itemInCart) {
      itemInCart.orderItemQuantity++;
      await itemInCart.save();
    } else {
      const newCartItem = await OrderItem.create({
        orderItemPrice: 100,
        orderItemQuantity: 1,
        orderId: cart.id,
        productId: parseInt(req.params.productId),
      });
      //cart.orderItems.push(newCartItem);
    }
    cart = await Order.findOne({
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
    });
    res.send(cart);
  } catch (error) {
    next(error);
  }
});
