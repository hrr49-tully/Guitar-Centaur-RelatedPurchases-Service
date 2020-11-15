const mariadb = require('mysql');
const faker = require('faker');
const conn = require('../connection.js');

const seeds = 100; // base count for how many items to populate database with
const relatedSeedMultiplier = 20; // how many related items per-item entry
const maxRatingsPerItem = 25;

function getRanIntRange(lo, hi) {
  lo = Math.ceil(lo);
  hi = Math.floor(hi);
  return Math.floor(Math.random() * (hi - lo) + lo);
}

// This is the first batch of promises, and this table doesn't rely on other data, so we can just build it here.
// Details table:
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


// The main seed chain.
console.log('Seeding details table...')
Promise.all(detailPromises).then((detailIds) => {
  // Items:
  console.log('Seeding details table completed!\nSeeding items table...');

  const itemPromises = [];
  const itemIds = [];

  for (let i = 0; i < detailIds.length; i++) {
    const promise = new Promise((res, rej) => {
      const detailId = detailIds[i];
      const productDescription = faker.commerce.productDescription();
      const product = faker.commerce.productName();
      const cost = faker.commerce.price();
      const rating = getRanIntRange(1, 5);
      const imageUrl = `${conn.awsUrl}images/${getRanIntRange(1, 50)}.jpg`;

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
    // Related:
    // Items table is now built, so we can now reference it in the related table.
    console.log('Seeding items table completed!\nSeeding related items...');

    const relatedPromises = [];

    for (let i = 0; i < itemIds.length; i++) {
      const relatedIds = [];
      for (let m = 0; m <= relatedSeedMultiplier; m++) {
        const promise = new Promise((res, rej) => {
          const parentId = itemIds[i];

          // make sure related is unique per item
          let itemId = null;
          while (relatedIds.indexOf(itemId) >= 0 || itemId === null) {
            itemId = getRanIntRange(0, itemIds.length);
          }
          relatedIds.push(itemId);

          conn.dbConn.query('INSERT INTO related (parent_item_id, item_id) VALUES (?, ?)', [parentId, itemId], function (error, results) {
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
      console.log('Seeding related items table completed!');

      // Ratings
      console.log('Seeding ratings table...');
      const ratingsPromises = [];
      for (let i = 0; i < itemIds.length; i++) {
        const ranRantingsAmount = getRanIntRange(0, maxRatingsPerItem);
        for (let r = 0; r <= ranRantingsAmount; r++) {
          const promise = new Promise((res, rej) => {
            conn.dbConn.query('INSERT INTO ratings (item_id, score) VALUES (?, ?)', [itemIds[i], getRanIntRange(1, 5)], function (error, results) {
              if (!error) {
                res(results.insertId);
              } else {
                console.log('Error in ratings seeder: ', error);
                rej(error);
              }
            });
          });
          ratingsPromises.push(promise);
        }
      }

      Promise.all(ratingsPromises).then((ratingsIds) => {
        console.log('Seeding ratings table completed!\nSeeding finished!');
        conn.dbConn.end();
      });
    });
  });
});