const { DataTypes } = require('sequelize');

// ! paymentGroup may eventually have no real purpose

module.exports = function(sequelize) {
  const PaymentGroup = sequelize.define('paymentGroup', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.TEXT,

    // The type of the payemnt: (monthly, reservation, id,...)
    // TODO?: consider changing to enum for consistency
    // ? or leave it as is for flexibility
    type: DataTypes.TEXT,
    value: DataTypes.REAL,

    // The default allowed number of days for this payment group
    // ? may not be used, if so, TODO: remove
    allowedPeriod: DataTypes.INTEGER

    // ?not sure wether or not a reference to the section
    // ?should always be required, or if it can be optional
    //* reference to section
  });

  return PaymentGroup;
};
