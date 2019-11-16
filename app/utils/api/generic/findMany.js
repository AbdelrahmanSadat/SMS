module.exports = async function(model, searchParameter, searchValue) {
  let searchConditionObject;
  searchConditionObject[searchParameter] = searchValue;
  let foundUsers = await model.findAll({
    where: searchConditionObject
  });
  return foundUsers;
};
