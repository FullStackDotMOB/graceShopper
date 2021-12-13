const router = require('express').Router();
const {
  models: { Product },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allProduct = await Product.findAll({});
    res.send(allProduct);
    console.log(Object.keys(User.prototype));
  } catch (error) {
    next(error);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.productId);
    res.send(singleProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
