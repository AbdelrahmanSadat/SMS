const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Exam = sequelize.define('exam', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.TEXT,
    date: DataTypes.DATE,
    minimum: DataTypes.REAL,
    maximum: DataTypes.REAL,
    // * not used currently(for simplification)
    class: {
      type: DataTypes.ENUM,
      values: ['1st', '2nd', '3rd', 'other']
    }
    // TODO?: other data about the exam, like the file path or something
    // TODO? Create a section reference? or a class attribute?
  });

  return Exam;
};
