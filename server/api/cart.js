const router = require('express').Router();
module.exports = router;
const {
  models: { Order, OrderItem, Product },
} = require('../db');


//find all orders where complete is false
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

//find orderitem by productid
router.get("/:id", async (req, res, next) => {
  try {
    const data = await Order.findOne({
      where: {
        productId: req.params.id,
      },
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

// delete one orderItem by id
router.delete("/:id", async (req, res, next) => {
  try {
    const data = await OrderItem.findByPk(req.params.id);
    await data.destroy();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

























router.post('/:userId', async (req, res, next) => {
	Order.findOrCreate({
		where: {
			userId: req.params.userId,
			completed: false,
		},
	})
		.spread((order) => {
			const { orderItem } = req.body;
			Product.findOrCreate({
				where: {
					title: orderItem.title,
					orderId: +order.id,
					productId: orderItem.productId,
					price: orderItem.price,
				},
			})
				
			
		catch(error);
});


router.post('/:userId', async (req, res, next) => {
	Orders.findOrCreate({
		where: {
			userId: req.params.userId,
			fulfilled: false,
		},
	})
		.spread((order) => {
			const { orderItem } = req.body;
			Product.findOrCreate({
				where: {
					title: orderItem.title,
					orderId: +order.id,
					productId: orderItem.productId,
					price: orderItem.price,
				},
			})
				.then((item) => {
					item[0].update({ quantity: +req.body.quantity });
				})
				.then((updatedItem) => res.status(204).json(updatedItem));
		})
		.catch(next);
});