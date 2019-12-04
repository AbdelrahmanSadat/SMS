const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  const Section = sequelize.define('section', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.TEXT,
    // TODO?: maybe add convention/validation to naming
    // Currently not being used
    // session: DataTypes.TEXT,
    // TODO?: change enum type to allow more flexibility?
    // sqlite doesn't have an enum type anyway, so anything works
    semester: {
      type: DataTypes.ENUM,
      values: ['1st', '2nd', 'summer', 'other']
    },
    //? class is in both student and section
    class: {
      type: DataTypes.ENUM,
      values: ['1st', '2nd', '3rd', 'other']
    },

    startingDate: DataTypes.DATE,

    // TODO: dynamic schedule structure
    // TODO: (days, starting & ending time)
    // e.g:
    /*
      [
        {day: sat, startingTime: 4:00, endingTime: 6:00},
        {day: tue, startingTime: 3:00, endingTime: 5:00}
      ]
    */

    // TODO: Counter incrementing, resetting and limits ???
    counter: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },

    
    // Admission fees (mlazm, etc...) excluding monthly fees
    defaultAdmissionFees: DataTypes.REAL,
    
    defaultMonthlyFees: DataTypes.REAL,
    
    // payment group references the section
    // to find the default monthly fees just search
    // the payment group with the section's id
    // where the type of payment group is "monthly"
    // or something like that
    // ! ref from payment group is no longer needed???
    
    // Using associations already creates a reference
    // to the section the student is assigned to (one-to-many)
    // in the student's table (one-way referencting)
    //
  });

  return Section;
};
