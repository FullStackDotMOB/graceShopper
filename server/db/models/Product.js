const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Product = db.define('product', {
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DECIMAL(5, 2),
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    // if image does not pop up (or is not found)
    // defaultValue: default-product-image.jpg
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
    defaultValue: null,
  },
  shopQuantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 10,
    },
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM({
      values: ['Cleansers', 'Toners', 'Exfoliators', 'Moisturizers'], //we'll name these categories Wednesday morning
    }),
  },
  SKU: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
