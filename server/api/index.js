const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/cart', require('./cart'));

//user/cart/:slug
//for this user or this cart
//

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
