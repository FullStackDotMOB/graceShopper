//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');

//associations could go here!
User.hasMany(Order);
Order.belongsToMany(User);
Order.hasMany(Product, { through: Order_item });
Product.belongsToMany(Order, { through: Order_item });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
  },
};
