// TODO: keeps track of each student's attendance for each period
// ? To be reconsidered, given the large number
// ? of records it'll have and the large size in
// ? memory
// ? will take much less memory if used properly

const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Attendance = sequelize.define('attendance', {
    // ? no id is needed?

    // * reference to a section (associations)

    // * reference to a student in that section (associations)

    // * by default, should only create and attendance
    // * record for every student in in every section for
    // * every period/session

    // date of the period/session
    date: DataTypes.DATE,

    // wether the student has attended or not
    attended: DataTypes.BOOLEAN
  });

  return Attendance;
};
