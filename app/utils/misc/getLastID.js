// * Givent the sequelize connection object
// * and a table name, outputs the last id
// * in table

module.exports = async function(sequelize, tableName) {
  let temp = await sequelize.query(
    `select seq from sqlite_sequence where name="students"`
  );
  // returns the last id as a number, not the whole object
  // when the table is empty, temp[0][0] is undefined
  // so it returns zero instead
  return temp[0][0] ? temp[0][0].seq : 0;
};
