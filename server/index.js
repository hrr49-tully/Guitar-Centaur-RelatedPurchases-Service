const express = require('express');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
const db = require('./database.js');
const conn = require('../connection.js');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/api/getrelatedpurchases', (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    return db.getRelatedPurchases(id, (results) => {
      res.status(200).send(results);
    }, (error) => {
      res.status(401).send(error);
    });
  } else {
    res.status(401).send('Bad arguments');
  }
});

app.post('/api/addrelatedpurchase', (req, res) => {
  /*return dbfunction.then((results) => {
    res.send(results);
  });*/
});

app.post('/api/deleterelatedpurchase', (req, res) => {
  /*return dbfunction.then((results) => {
    res.send(results);
  });*/
});

app.get('/api/getdetails', (req, res) => {
  /*return dbfunction.then((results) => {
    res.send(results);
  });*/
});

app.post('/api/adddetails', (req, res) => {
  /*return dbfunction.then((results) => {
    res.send(results);
  });*/
});

app.listen(conn.port, () => {
  console.log(`App listening on ${conn.port}`)
});