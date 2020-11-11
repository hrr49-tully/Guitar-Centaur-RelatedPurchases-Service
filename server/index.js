const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const database = require('./database.js');
const conn = require('../connection.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '/../public')));

app.get('/api/getrelatedpurchases', (req, res) => {
  /*return dbfunction.then((results) => {
    res.send(results);
  });*/
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