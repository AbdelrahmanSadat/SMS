// TODO: id
// TODO: name
// TODO: value
// TODO: class (text)
// TODO: section (ref or text)
// TODO: allowance period (optional, conflicts with counter)
// TODO:

const { DataTypes } = require('sequelize');

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
    // TODO: consider changing to enum for consistency
    // ? or leave it as is for flexibility
    type: DataTypes.TEXT,
    value: DataTypes.REAL,

    // The default allowed number of days for this payment group
    // The number is in days
    // ? may not be used, if so, TODO: remove
    allowedPeriod: DataTypes.INTEGER

    // ! Class and Section attributes would be denormalized
    // if they were created here, since they already exist
    // when a section references this payment group
    // instead, create a reference?
    // ! reservations don't go with this logic
    // it may be okay to denormalize these values
    // depending on their update rate (which i presume is low)
    // * OR to fix this, have the payment group refernce
    // * the section, since it's a one to many relationship
    // * (one section has many payment groups)
    // This was only a problem because i wanted the section
    // to reference the payment group when defining its
    // default mounthly fees, which would have cause a conflict
    // when searching the paymentGroup table to find their
    // default monthly fees, since the section would only
    // be able to reference its defauld fees, and nothing
    // else like its reservation or book values and the such
    
    // TODO: associations
    // TODO: ref section in payment group
  });

  return PaymentGroup;
};
