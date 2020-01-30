// * Keeps track of payment information and details
// ! removed since all payment data needed can be
// ! tracked using the income, expense, and studentFees
// ! models

// *? Might be reconsidered later

// const { DataTypes } = require('sequelize');

// module.exports = function(sequelize) {
//   const Payment = sequelize.define('payment', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       unique: true /* ? redundant with primary key? */,
//       autoIncrement: true,
//       allowNull: false
//     },
//     date: DataTypes.DATE,
//     //* PaymentGroup Ref
//     // TODO: should be a ref to the student payment join
//     // TODO: table instead of PG. If it's used
//     //* Student ref
//     //* User ref
    

//   });

//   return Payment;
// };
