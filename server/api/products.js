const router = require('express').Router();
const {
  models: { Product },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allProduct = await Product.findAll({});
    res.send(allProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
