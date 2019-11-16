module.exports = async function(model, searchParameter, searchValue) {
  let searchConditionObject;
  searchConditionObject[searchParameter] = searchValue;
  let user = await model.findAll({
    where: searchConditionObject
  });
  let destroyedUser = await user.destroy();
  return destroyedUser;
};
