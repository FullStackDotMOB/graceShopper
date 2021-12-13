const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER, // Comment - This will be counted as pennies.
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    // if image does not pop up (or is not found)
    defaultValue: 'default-product-image.jpg',
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'This is a product description',
  },

  SKU: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
