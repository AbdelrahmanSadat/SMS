const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
  const Student = sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    // TODO: next ID
    name: DataTypes.TEXT,
    Email: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: DataTypes.TEXT
    },
    parentName: DataTypes.TEXT,
    parentPhoneNumber: {
      type: DataTypes.TEXT
    },
    parentJob: DataTypes.TEXT,
    address: DataTypes.TEXT,
    miscNotes: DataTypes.TEXT,
    school: DataTypes.TEXT,
    // sqlite doesn't have an enum type anyway so anything works
    class: {
      type: DataTypes.ENUM,
      values: ["1st", "2nd", "3rd", "other"]
    },
    // TODO: fees and payment re-implementation
    // TODO: fees is an object with properties
    // TODO: paymentGroup(ref) and due date (optional)
    fees: DataTypes.REAL,
    // TODO: payment due date
    // TODO: status???
    status: {
      type: DataTypes.ENUM,
      // TODO: notes on terminated and wanted status
      // TODO: could be implemented in pre-save code
      values: ["Active", "Terminated", "Wanted"]
    },
    // TODO: attendanceCounter
    // TODO: modification/validation/refactoring/re-implementaion
    attendanceCounter: DataTypes.INTEGER,
    // TODO: assignedSection
    // Using associations already creates a reference
    // to the section the student is assigned to
    // TODO: warnings (text enums)
    // TODO: list of warnings(in a table) or separated Text 
    warnings: DataTypes.TEXT
    // TODO: exam
    // TODO: reservationDate (references model instead)
    // TODO: allPaymentDates
    // TODO: attendanceDates
  });

  return Student;
};
