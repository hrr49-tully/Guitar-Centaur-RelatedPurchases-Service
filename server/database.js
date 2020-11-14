const conn = require('../connection.js');

module.exports.getItem = function getItem(itemId, succ, err) {
  if (itemId) {
    // get specific item
    conn.dbConn.query('SELECT i.id,i.title,i.description,i.cost,i.rating,i.image_url,d.overview,d.specifications,d.coverage FROM items i LEFT JOIN details d ON i.details_id = d.id WHERE i.id = ?', [itemId],  (error, results) => {
      if (error) {
        err(error);
      } else {
        succ(results);
      }
    });
  } else {
    // get all items
    conn.dbConn.query('SELECT i.title,i.description,i.cost,i.rating,i.image_url,d.overview,d.specifications,d.coverage FROM items i LEFT JOIN details d ON i.details_id = d.id',  (error, results) => {
      if (error) {
        err(error);
      } else {
        succ(results);
      }
    });
  }
};

module.exports.getRelatedPurchases = function getRelatedPurchases(itemId, succ, err) {
  conn.dbConn.query('SELECT i.id,i.details_id,i.description,i.title,i.cost,i.rating,i.image_url FROM related r INNER JOIN items i ON r.item_id = i.id WHERE parent_item_id = ?', [itemId],  (error, results) => {
    if (error) {
      err(error);
    } else {
      succ(results);
    }
  });
};

module.exports.addRelatedPurchase = function addRelatedPurchase(parentId, itemId, succ, err) {
  conn.dbConn.query('INSERT INTO related (parent_item_id, item_id) VALUES (?, ?)', [parentId, itemId],  (error, results) => {
    if (error) {
      err(error);
    } else {
      succ(results);
    }
  });
};

module.exports.deleteRelatedPurchase = function deleteRelatedPurchase(relatedId, succ, err) {
  conn.dbConn.query('DELETE FROM related WHERE id = ?', [relatedId],  (error, results) => {
    if (error) {
      err(error);
    } else {
      succ(results);
    }
  });
};

module.exports.getDetails = function getDetails(detailsId, succ, err) {
  conn.dbConn.query('SELECT * FROM details WHERE id = ?', [detailsId],  (error, results) => {
    if (error) {
      err(error);
    } else {
      succ(results);
    }
  });
};

module.exports.addDetails = function addDetails(iid, overview, specs, coverage, succ, err) {
  conn.dbConn.query('INSERT INTO details (overview, specifications, coverage) VALUES (?, ?, ?)', [overview, specs, coverage],  (error, results) => {
    // SELECT * FROM details WHERE id = ?
    if (error) {
      err(error);
    } else {
      // update item
      const detailsId = results.insertId;
      conn.dbConn.query('UPDATE items SET details_id = ? WHERE id = ?', [detailsId, iid],  (error, results) => {
        if (error) {
          err(error);
        } else {
          succ(results);
        }
      });
    }
  });
};