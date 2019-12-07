const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Warning = sequelize.define('warning', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['teminated', 'wanted', 'payment', 'attendance', 'other']
    },
    text: {
      type: DataTypes.TEXT
    }
    //* studentWarning Ref (warning references here???)
  });

  return Warning;
};
