// * Join table for student and payment group
// * also contains due date for each payment
// * and the actual value to be paid by student

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const StudentFees = sequelize.define('studentFees', {
    // ? ID is not needed in the join table
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },

    // ! paymentGroup may eventually have no real purpose

    //? a reference to the paymentGroup is optional???

    // by default, the name in the payment group
    // but can be changed or if there's no PG ref.
    name:  DataTypes.TEXT,

    dueDate: DataTypes.DATE,
    // the actual amount the student is required
    // to pay, which may not always be the
    // default value in the payment group
    value: DataTypes.REAL,
    // wether the fees were paid or not.
    // In this case we won't remove the record
    // when the payment is complete, for data collection purposes
    paid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return StudentFees;
};
