const Sequelize = require('sequelize');
const db = require('../db');

// Orlando: better name could be OrderItem
const OrderItem = db.define('order_item', {
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

module.exports = OrderItem;
