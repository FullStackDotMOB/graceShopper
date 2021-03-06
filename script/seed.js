'use strict';

const {
  db,
  models: { User, Product, Order, OrderItem },
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
    User.create({ username: 'courage', password: '123' }),
    User.create({ username: 'murphy', password: '345' }),
    User.create({ username: 'eustace', password: '678' }),
    User.create({ username: 'muriel', password: '972' }),
  ]);

  //Creating Products
  const products = await Promise.all([
    Product.create({
      name: 'Ara By Essence Bare Face Wash',
      price: 2000,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5ed6c874b197c460fc4dddc2/1621651749463-8FGCIW6QY81NYAX7H6PM/7F220B03-CEF9-43FC-932B-5B11CBBD1F82?format=300w',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'This hydrating, daily facial cleanser  was created to remove impurities from the skin in a gentle, effective manner. A small amount goes a long way, which means this bottle will last a long time!',
      SKU: 1172,
    }),
    Product.create({
      name: 'AnteAGE Cleanser',
      price: 4000,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5ed6c874b197c460fc4dddc2/1627932704386-5KODA3VGU3XK91NGIN2I/anteage.jpg?format=300w',
      // shopQuantity: 4,
      // category: 'Cleansers',
      description:
        'The universally formulated AnteAGE® Cleanser is designed to provide a balanced approach to cleansing, for all skin types. This gentle, foaming cleanser, enriched with essential fatty acids, anti-oxidants, anti-inflammatory botanicals and detoxifying actives will thoroughly cleanse all traces of impurities, excess oil and surface debris, while leaving the skin soft, soothed, hydrated and balanced.',
      SKU: 1738,
    }),
    Product.create({
      name: 'Ara By Essence Radiant Face Moisturizer',
      price: 1900,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5ed6c874b197c460fc4dddc2/1621651833958-51387IEUVCWIFLC2IJUH/7C01140F-FEB3-4281-A83E-92BEF59608E5?format=300w',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'This daily face moisturizer was created to protect and hydrate the skin following cleansing. It contains a unique blend of rich oils, butters and AHAs which help soothe irritated skin, reduce breakouts & control oil production. The product dries matte on the skin.',
      SKU: 1017,
    }),
    Product.create({
      name: 'Paulas Choice Omega+ Complex Moisturizer',
      price: 3600,
      imageUrl:
        'https://www.sephora.com/productimages/product/p469525-av-01-zoom.jpg?imwidth=300',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'A creamy moisturizer with a nourishing blend of superfood Omegas-3, -6 and -9 to help naturally restore glow to dehydrated skin.',
      SKU: 1017,
    }),
    Product.create({
      name: 'Ara By Essence Natural Enzyme Mask',
      price: 2000,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5ed6c874b197c460fc4dddc2/1621651785776-GN4TRMQGV039CVT65YJX/C9003485-11D7-49D2-8C64-B28F505C5314?format=300w',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'Pineapple and papaya based fruit acids work together to unclog pores, brighten skin, lift dirt and impurities, and leave skin tone more even. This masque provides deep exfoliation and promotes healthy, glowing skin. Note: This mask should be used 1-2 times per week.',
      SKU: 1127,
    }),
    Product.create({
      name: 'Sanitas Hydrating Brightening Solution',
      price: 2900,
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5ed6c874b197c460fc4dddc2/1614910193810-9JGWPJCU9VUOK7DWNCH8/75A30458-61DE-434C-9297-F5ACC907D056?format=400w',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'A gentle, exfoliating treatment designed to resurface skin texture without causing irritation. A collage cofactor complex, combined with Lactic Acid and Vitamin C; ;helps to brighten age spots, reduce the appearance of wrinkles and fortify the skins defense against environmental aggressors.',
      SKU: 1023,
    }),
    Product.create({
      name: 'Sanitas Moisture Mist',
      price: 1800,
      imageUrl:
        'https://sanitas-skincare.com/wp-content/uploads/2019/06/Amazon_1000x1000_MM100-1-600x600.jpg',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'A moisture infusing spray that enhances the absorption and spreadability of serums and moisturizers. A collagen cofactor complex, combined with biogenic humectants, helps softend and smooth dehydrated skin.',
      SKU: 1013,
    }),
    Product.create({
      name: 'Fresh Kombucha Antioxidant Facial Treatment Essence',
      price: 3200,
      imageUrl:
        'https://www.sephora.com/productimages/sku/s2044949-main-zoom.jpg?imwidth=315',
      // shopQuantity: 8,
      // category: 'Cleansers',
      description:
        'A bestselling anti-pollution treatment essence powered by antioxidant-rich kombucha for visibly smooth, luminous skin. Treats dark spots, fine lines, wrinkles, and dullness',
      SKU: 1342,
    }),
  ]);
  //Creating Orders
  const orders = await Promise.all([
    Order.create({
      userId: 3,
      addressLine1: 'line 1',
      addressLine2: 'line 2',
      city: 'city',
      state: 'NY',
      zip: '10001',
      phone: '123-456-7891',
      email: 'unique1@mail.com',
      complete: false,
    }),
    Order.create({
      userId: 2,
      addressLine1: 'line 3',
      addressLine2: 'line 4',
      city: 'second city',
      state: 'second state',
      zip: '10027',
      phone: '321-645-7892',
      email: 'unique2@mail.com',
      complete: true,
    }),
    Order.create({
      userId: 1,
      addressLine1: 'line 5',
      addressLine2: 'line 6',
      city: 'third city',
      state: 'NY',
      zip: '10040',
      phone: '347-862-6943',
      email: 'unique3@mail.com',
      complete: false,
    }),
  ]);

  const orderItems = await Promise.all([
    OrderItem.create({
      orderItemPrice: 2000,
      orderItemQuantity: 2,
      orderId: 3,
      productId: 3,
    }),
    OrderItem.create({
      orderItemPrice: 3600,
      orderItemQuantity: 3,
      orderId: 3,
      productId: 4,
    }),
    OrderItem.create({
      orderItemPrice: 2000,
      orderItemQuantity: 2,
      orderId: 3,
      productId: 5,
    }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded ${orders.length} orders`);
  console.log(`seeded ${orders.length} order items`);
  console.log(`seeded successfully`);

  return {
    users: {
      courage: users[0],
      murphy: users[1],
      eustace: users[2],
      muriel: users[3],
    },
    products: {
      bareFace: products[0],
      anteAge: products[1],
      radiant: products[2],
      paulasChoice: products[3],
      enzymeMask: products[4],
      brightSolution: products[5],
      moistureMist: products[6],
      freshEssence: products[7],
    },
    orders: {
      order1: orders[0],
      order2: orders[1],
      order3: orders[2],
    },
    orderItems: {
      orderItem1: orderItems[0],
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
