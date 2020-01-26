// ! Currently out of date and out of use

// * Opens the DB connection, then seeds it with seed.js

const sequelize = require("../db");
// ?The seed file contains all Models, so sequelize knows
// ?what to sync (true)
const seed = require("./seed");

sequelize
  // Setting force to "true" drops tables if they exist
  .sync({ force: true })
  .then(() => {
    console.log("synced");
    // starts seeding the database
    seed();
  })
  .catch(error => {
    console.log(error);
  });
