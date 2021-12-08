const Sequelize = require('sequelize');
const db = require('../db');
const axios = require('axios');

const Product = db.define('product', 
  // o: change name to "name"
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // o: store pennies as an integer
  //  divide by 100 on frontend
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
  // o: work on this later, remove now
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
  // o: work on this later, remove now
  category: {
    type: Sequelize.ENUM({
      values: ['Cleansers', 'Toners', 'Exfoliators', 'Moisturizers'], //we'll name these categories Wednesday morning
    }),
  },
  // o: modify to string
  SKU: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Product;
