const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-01.cleardb.net',
    port: 3306,
    user: 'beb1b958992696',
    password: 'd2baec71',
    database: 'heroku_e465ac807051979'
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