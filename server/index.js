const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const conn = require('../connection.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '/../public')));

app.listen(conn.port, () => {
  console.log(`App listening on ${conn.port}`)
});