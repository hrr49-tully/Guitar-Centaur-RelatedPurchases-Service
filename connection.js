// Shared connection information, for easy changing later
const host  = 'localhost';
const port  = 3000;
const url   = `http://${host}:${port}`;

const dbUser  = 'student';
const dbPass  = 'password';
const db      = 'rpmodule';

const mysql = require('mysql');
const dbConn = mysql.createConnection({
  host      : host,
  user      : dbUser,
  password  : dbPass,
  database  : db
});

module.exports = {
  host,
  port,
  url,
  dbConn
};