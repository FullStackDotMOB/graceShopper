const Sequelize = require('sequelize');
const db = require('../db');

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
});

module.exports = Order_item;
