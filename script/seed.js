'use strict';

const {
  db,
  models: { User, Product, Cart },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ]);

  //Creating Products
  const products = await Promise.all([
    Product.create({
      productName: 'Ara By Essence Bare Face Wash',
      price: 20.0,
      imageUrl: 'shorturl.at/fpvxF',
      shopQuantity: 8,
      category: 'Cleansers',
      SKU: 1172,
    }),
    Product.create({
      productName: 'AnteAGE Cleanser',
      price: 40.0,
      imageUrl: 'shorturl.at/gjHLQ',
      shopQuantity: 4,
      category: 'Cleansers',
      SKU: 1738,
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    products: {
      bareFace: products[0],
      anteAge: products[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
