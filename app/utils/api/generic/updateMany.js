// new values is an array of objects
module.exports = async function(model, searchParameter, searchValue, newValues) {
  let searchConditionObject;
  searchConditionObject[searchParameter] = searchValue;
  let users = await model.findAll({
    where: searchConditionObject
  });
  let updatedUsersArray = [];
  for (let i = 0; i < users.length; i++) {
    let tempUpdatedUser = await users[i].update(newValues[i]);
    updatedUsersArray.push(tempUpdatedUser);
  }

  return updatedUsersArray;
};
