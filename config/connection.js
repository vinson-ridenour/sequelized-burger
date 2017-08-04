// Set up MySQL connection.
var mysql = require("mysql2");

var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize("mrihjn28b8l07hql", "dy3rq2436ak3kwxw", "ro95jpysinq66nlk", {
    host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}
else {
  var sequelize = new Sequelize("burgersSequel_db", "root", "Catelyn9!", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}

// Make connection.
// sequelize.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + sequelize.threadId);
// });

// Export connection for our ORM to use.
module.exports = sequelize;