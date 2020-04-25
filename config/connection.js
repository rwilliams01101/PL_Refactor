const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'g6x89cfy3lzt7c7e',
    password: 'spzoa7a5qs1lj8dv',
    database: 'p61un5t1lu8zcou0'
  });

connection.connect();

// we give connection.query access to promises
// i.e. .then() and .catch()
connection.query = util.promisify(connection.query);

module.exports = connection;