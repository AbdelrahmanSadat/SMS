// * Database setup, connection, and configuration

// TODO: db path (file should be outside src?)
// TODO: db seeding

/* 
  ? There are some instances were we may not want webpack
  ? to bundle particular assets, like those being consumed by
  ? modules like fs. Here is where we can put them and then
  ? reliably access them in both development and production. 
  ? electron-webpack project structure
*/

const { Sequelize } = require('sequelize');

module.exports = function(path) {
  // If the database file didn't exist before,
  // Sequelize will create it (no need to use sqlite3)
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path
  });

  // Testing the connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  
  return sequelize
};
