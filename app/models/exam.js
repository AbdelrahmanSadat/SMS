const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Exam = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    date: DataTypes.DATE,
    minimum: DataTypes.REAL,
    maximum: DataTypes.REAL
    // TODO: other data about the exam, like the file path or something
  });

  return Exam;
};
