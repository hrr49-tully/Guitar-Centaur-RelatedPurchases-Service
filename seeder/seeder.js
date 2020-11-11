const mariadb = require('mysql');
const faker = require('faker');
const conn = require('../connection.js');

const seeds = 100; // base count for how many items to populate database with
const relatedSeedMultiplier = 20; // how many related items per-item entry

function getRanIntRange(lo, hi) {
  lo = Math.ceil(lo);
  hi = Math.floor(hi);
  return Math.floor(Math.random() * (hi - lo) + lo);
}

// This is the first batch of promises, and doesn't rely on other data, so we can just build it here...
// details: overview, specifications, coverage
// INSERT INTO details (overview, specifications, coverage) VALUES ('text', 'text', 'text');
const detailPromises = [];
const detailIds = [];

for (let i = 0; i < seeds; i++) {
  const detailPromise = new Promise((res, rej) => {
    const productOverview = faker.lorem.paragraphs(5);
    const productSpecifications = faker.lorem.paragraphs(5);
    const productCoverage = faker.lorem.paragraphs(2);

    conn.dbConn.query('INSERT INTO details (overview, specifications, coverage) VALUES (?, ?, ?)', [productOverview, productSpecifications, productCoverage] ,function (error, results) {
      if (!error) {
        res(results.insertId); // pass id down to items
      } else {
        console.log('Error in details seeder: ', error);
        rej(error);
      }
    });
  });

  detailPromises.push(detailPromise);
}


// The big seed chain... Items table relies on the id's from the details table, so we must wait for that first...
console.log('Seeding details table...')
Promise.all(detailPromises).then((detailIds) => {
  console.log('Seeding details table completed!\nSeeding items table...');

  // items: details_id, description, title, cost, rating
  // INSERT INTO items (details_id, description, title, cost, rating) VALUES (1, 'text', 'text', 1234, 1);
  const itemPromises = [];
  const itemIds = [];

  for (let i = 0; i < detailIds.length; i++) {
    const promise = new Promise((res, rej) => {
      const detailId = detailIds[i];
      const productDescription = faker.commerce.productDescription();
      const product = faker.commerce.productName();
      const cost = faker.commerce.price();
      const rating = getRanIntRange(1, 5);
      const imageUrl = faker.image.image();

      conn.dbConn.query('INSERT INTO items (details_id, description, title, cost, rating, image_url) VALUES (?, ?, ?, ?, ?, ?)', [detailId, productDescription, product, cost, rating, imageUrl], function (error, results) {
        if (!error) {
          res(results.insertId);
        } else {
          console.log('Error in items seeder: ', error);
          rej(error);
        }
      });
    });

    itemPromises.push(promise);
  }

  Promise.all(itemPromises).then((itemIds) => {
    // Items table is no built, so we can reference it in the related table...
    console.log('Seeding items table completed!\nSeeding related items...');

    // related: parent_item_id, item_id
    // INSERT INTO related (parent_item_id, item_id) VALUES (1, 2);
    const relatedPromises = [];

    for (let m = 0; m < relatedSeedMultiplier; m++) {
      for (let i = 0; i < itemIds.length; i++) {
        const promise = new Promise((res, rej) => {
          const parentId = itemIds[i];
          const itemId = getRanIntRange(0, itemIds.length);

          conn.dbConn.query('INSERT INTO related (parent_item_id, item_id) VALUES (?, ?)', [parentId, itemId],function (error, results) {
            if (!error) {
              res(results.insertId);
            } else {
              console.log('Error in related seeder: ', error);
              rej(error);
            }
          });
        });

        relatedPromises.push(promise);
      }
    }

    Promise.all(relatedPromises).then((relatedIds) => {
      console.log('Seeding related items table completed!\nFINISHED!');
      conn.dbConn.end();
    });
  });
});