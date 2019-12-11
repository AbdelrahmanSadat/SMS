const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Student = sequelize.define('student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    // TODO: barID ?

    // TODO: next ID (function to keep track of the latest id)

    name: DataTypes.TEXT,
    email: {
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
    parentOccupation: DataTypes.TEXT,
    address: DataTypes.TEXT,
    notes: DataTypes.TEXT,
    school: DataTypes.TEXT,
    // sqlite doesn't have an enum type anyway so anything works
    //? class is in both student and section (is probably logically fine)
    class: {
      type: DataTypes.ENUM,
      values: ['1st', '2nd', '3rd', 'other']
    },

    // TODO: add defalut value (active)
    status: {
      type: DataTypes.ENUM,
      defaultValue: "Active",
      // TODO?: notes on terminated and wanted status
      // TODO?: could be implemented in pre-save code
      values: ['Active', 'Terminated', 'Wanted', 'other']
    },

    // TODO?: modification/validation/refactoring/re-implementaion
    attendanceCounter: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    // Date of reservation?
    reservationDate: {
      type: DataTypes.DATE,
      //???
      defaultValue: Sequelize.NOW
    }

    // * fees
    // [{paymentGroup, due date, value}]
    // create a foreign key (associations?) that points
    // to a newly created table (studentFees?) that
    // contatins the studentID? , payment group id,
    // value to pay, and a due date

    // * exam
    // same as fees?

    // * reservation date:
    // reservation date can be known by searching the
    // payments table with the student id and the type "reservation"

    // TODO?: average attendance rate ?
    // * attendance:
    // the attendance table has a ref to the student

    // * assignedSection:
    // Using associations creates a reference
    // to the section the student is assigned to

    //* studentWarning Ref
  });

  return Student;
};
