//* Setting up the database with the default
//* path we're using.
let sequelizeConfig = require("./db");
let models = sequelizeConfig("dbtest.db")
console.log("THE DB PATH")
console.log(__dirname)

// ? This creates the DB in /electron-react (app's root directory?)

module.exports = models;