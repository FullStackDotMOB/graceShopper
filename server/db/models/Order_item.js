const Sequelize = require('sequelize');
const db = require('../db');
const Product = require('./Product');

const Order_item = db.define('order_item', {
  orderItemPrice: {
    type: Sequelize.INTEGER,
  },
  orderItemQuantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  // include: [
  //   {
  //     model: Product,
  //   },
  // ],
});

module.exports = Order_item;

// Order_item.create({
//   order1: orders[0],
//   bareFace: products[0],
//   anteAge: products[1],
// });
