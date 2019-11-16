const User = require("../../../models/user");

module.exports = async function(model) {
  let allUsers = await model.findAll();
  return allUsers;
};
