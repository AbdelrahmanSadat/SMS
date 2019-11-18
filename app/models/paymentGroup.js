// TODO: id
// TODO: name
// TODO: value
// TODO: class (text)
// TODO: section (ref or text)
// TODO: allowance period (optional, conflicts with counter)
// TODO:

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const PaymentGroup = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.TEXT,
    // The type of the payemnt: (monthly, reservation, id,...)
    // TODO: consider changing to enum for consistency
    // ? or leave it as is for flexibility
      type: DataTypes.TEXT,
      value: DataTypes.REAL,
      // The default allowed number of days for this payment group
      // The number is in days
      // ? may not be used, if so, TODO: remove
      allowedPeriod: DataTypes.INTEGER,
      // * Class and Section attributes would be denormalized
      // if they were created here, since they already exist
      // when a section references this payment group
      // ! reservations don't go with this logic
      // it may be okay to denormalize these values 
      // depending on their update rate (which i presume is low)
      // * OR to fix this, have the payment group refernce
      // * the section, since it's a one to many relationship
      // * (one section has many payment groups)
      // TODO: associations
    
    
  });

  return PaymentGroup;
};
