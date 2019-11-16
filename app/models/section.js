const { DataTypes } = require("sequelize");


module.exports = function (sequelize) {
  
  const Section = sequelize.define("section", {
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
      values: ["1st", "2nd", "summer", "other"]
    },
    class: {
      type: DataTypes.ENUM,
      values: ["1st", "2nd", "3rd", "other"]
    },
    // TODO: change to paymentGroup reference?
    fees: DataTypes.INTEGER,
    // ? Are starting and ending dates needed with
    // ? the existence and reliance on the counter
    startingDate: DataTypes.DATE,
    // Removed since counter indicates when the month ends
    // endingDate: DataTypes.DATE,
    // TODO: Counter incrementing, resetting and limits ???
    counter: DataTypes.INTEGER
    // TODO: Enlisted students (refs, two way?, denormalization)
    // Using associations already creates a reference
    // to the section the student is assigned to (one-to-many)
    // in the student's table (one-way referencting)
    //
  });

  return Section
  
};
