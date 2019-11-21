// * Join table for student and exam
// * also contains student's score

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const StudentExam = sequelize.define('studentExam', {
    // ? ID is not needed in the join table

    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true /* ? redundant with primary key? */,
    //   autoIncrement: true,
    //   allowNull: false
    // },

    // TODO: maybe add the date and time the test
    // TODO: was taken by this student?

    
    passing: DataTypes.BOOLEAN,

    score: DataTypes.DATE
  });

  return StudentExam;
};
