const conn = require('../connection.js');

module.exports.getRelatedPurchases = function getRelatedPurchases(itemId, succ, err) {
  conn.dbConn.query('SELECT i.details_id,i.description,i.title,i.cost,i.rating,i.image_url FROM related r INNER JOIN items i ON r.item_id = i.id WHERE parent_item_id = ?', [itemId],  (error, results) => {
    if (error) {
      err(error);
    } else {
      succ(results);
    }
  });
};