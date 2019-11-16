module.exports = async function(model, searchParameter, searchValue) {
  let searchConditionObject;
  searchConditionObject[searchParameter] = searchValue;
  let user = await model.findOne({
    where: searchConditionObject
  });
  let updatedUser = await user.update(newValues);
  return updatedUser;
};
