const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Income = sequelize.define('income', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
      },
      value: DataTypes.INTEGER,
      date: DataTypes.DATE,
      note: DataTypes.TEXT
  });

  return Income;
};
