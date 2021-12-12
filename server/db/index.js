//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Order_item = require('./models/Order_item');

//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Product, { through: Order_item });
Product.belongsToMany(Order, { through: Order_item });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_item,
  },
};
