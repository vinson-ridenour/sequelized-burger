// Set up MySQL connection.
var mysql = require("mysql2");

var Sequelize = require("sequelize");

if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize("fyrkfnstlb9utgg4", "bnm44ybyqit7wicf", "ma1idwi4t1tp9jw2", {
    host: "dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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

module.exports = sequelize;