//* Setting up the database with the default
//* path we're using.
let sequelizeConfig = require("./db");
let models = sequelizeConfig("../../../dbtest.db")

module.exports = models;