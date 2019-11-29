// * Join table for student and warning

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const StudentWarning = sequelize.define('studentWarning', {
    // ? ID is not needed in the join table

    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true /* ? redundant with primary key? */,
    //   autoIncrement: true,
    //   allowNull: false
    // },
  });

  return StudentWarning;
};
