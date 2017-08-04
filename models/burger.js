// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

  var Burger = sequelize.define("burgersSequels", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true  
    },
    burger_name: {
      type: Sequelize.STRING, // String = 255 characters
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: false
  });

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
