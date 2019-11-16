module.exports = async function(searchParameter, searchValue) {
  let searchConditionObject;
  searchConditionObject[searchParameter] = searchValue;
  let foundUser = await model.findOne({
    where: searchConditionObject
  });
  return foundUser;
};
