// * Join table for student and payment group
// * also contains due date for each payment

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const StudentPaymentGroup = sequelize.define('studentPaymentGroup', {
    // ? ID is not needed in the join table
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true /* ? redundant with primary key? */,
    //   autoIncrement: true,
    //   allowNull: false
    // },

    dueDate: DataTypes.DATE
  });

  return StudentPaymentGroup;
};
