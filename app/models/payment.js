// TODO: payment model 
// Keeps track of payment information and details

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Payment = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    date: DataTypes.DATE,
    // TODO: add payment group ref using associations
    // TODO: add student ref using associations
    // TODO: add user ref using associations (person who recieved payment)
    

  });

  return Payment;
};
