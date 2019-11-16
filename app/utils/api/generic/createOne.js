module.exports = async function(model, user) {
  let createdUser = await model.create(user);
  return createdUser;
};
