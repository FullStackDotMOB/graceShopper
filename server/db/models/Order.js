const Sequelize = require('sequelize');
const db = require('../db');
const Order_item = require('./Order_item');

const Order = db.define('order', {
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  addressLine1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  addressLine2: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(12),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

// Order.belongsTo(User);
// User.hasMany(Order);

// Order.clearCart = function () {
//   return this.update({ where: { complete: true } });
// };

// Order.updateAll = function () {
//   return this.update({ complete: true }, { where: { complete: false } });
// };

// User.getCart = async function () {
//   const cart = await User.findAll({
//     include: [{ model: Order }],
//   });
//   return owners;
// };

// User.prototype.getUnfulledOrders = async function () {
//   const Order = await this.getCart();
//   const OrderinProgess = Order.filter((Order_item) => {
//     return !Order.complete;
//   });
//   return OrderinProgess;
// };

module.exports = Order;
