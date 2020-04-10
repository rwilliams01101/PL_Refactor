const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'TqV9z!0snR',
    database: 'library_db'
  });

  connection.connect(function (err) {
    if (err) {
      console.error("Connection error: " + err.stack);
      return;
    }
    console.log("Connected as ID: " + connection.threadId);
  });
  
  connection.query = util.promisify(connection.query);
  
  module.exports = connection;