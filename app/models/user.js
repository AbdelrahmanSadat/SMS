const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  // TODO: Authorization
  // TODO: password hashing and stuff

  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true /* ? redundant with primary key? */,
      autoIncrement: true,
      allowNull: false
    },
    username: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    authorizationLevel: {
      type: DataTypes.ENUM,
      values: [0, 1, 2]
    },
    hashedPassword: DataTypes.TEXT,
    salt: DataTypes.TEXT
  });

  return User;
};
