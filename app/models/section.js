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
    class: {
      type: DataTypes.ENUM,
      values: ['1st', '2nd', '3rd', 'other']
    },

    startingDate: DataTypes.DATE,

    // TODO: Counter incrementing, resetting and limits ???
    counter: DataTypes.INTEGER

    // payment group references the section
    // to find the default monthly fees just search
    // the payment group with the section's id
    // where the type of payment group is "monthly"
    // or something like that

    // Using associations already creates a reference
    // to the section the student is assigned to (one-to-many)
    // in the student's table (one-way referencting)
    //
  });

  return Section;
};
