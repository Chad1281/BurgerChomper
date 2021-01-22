// Set up MySQL connection.
var mysql = require("mysql");

var connection; 
// = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "password",
//   database: "burgers_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'b886p217b8icow8e',
    password: 'jy9git13rdlzwii4',
    database: 'n5yi5nwije5wflol'
  });
};

// Export connection for our ORM to use.
module.exports = connection;