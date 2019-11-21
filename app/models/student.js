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
    // TODO: barID ?

    // TODO: next ID (function to keep track of the latest id)
    // TODO: for UI/UX purposes
    
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
    
    
    status: {
      type: DataTypes.ENUM,
      // TODO?: notes on terminated and wanted status
      // TODO?: could be implemented in pre-save code
      values: ["Active", "Terminated", "Wanted", "other"]
    },
    
    // TODO?: modification/validation/refactoring/re-implementaion
    attendanceCounter: DataTypes.INTEGER,
    
    // TODO: list of warnings(in a table) or separated Text 
    // implemnted as separable text for now
    warnings: DataTypes.TEXT
    
    // * fees
    // [{paymentGroup, due date, value}]
    // create a foreign key (associations?) that points
    // to a newly created table (studentFees?) that
    // contatins the studentID? , payment group id, 
    // value to pay, and a due date
    
    // * exam
    // same as payment

    // * reservation date:
    // reservation date can be known by searching the
    // payments table with the student id and the type "reservation"
    

    // TODO?: attendanceDates ?
    // TODO: average attendance rate ?
    // * attendance:
    // the attendance table has a ref to the student
    
    // * assignedSection:
    // Using associations already creates a reference
    // to the section the student is assigned to
  });
  
  return Student;
};
