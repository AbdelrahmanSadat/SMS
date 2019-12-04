// * Givent the sequelize connection object
// * and a table name, outputs the last id
// * in table

module.exports = async function (sequelize, tableName) {
  let temp = await sequelize.query(
    `select seq from sqlite_sequence where name=${tableName}`
  );
  return temp;
};
