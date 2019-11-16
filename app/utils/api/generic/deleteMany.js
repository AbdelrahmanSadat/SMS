// new values is an array of objects
module.exports = async function(model, searchParameter, searchValue, newValues) {
  let searchConditionObject;
  searchConditionObject[searchParameter] = searchValue;
  let users = await model.findAll({
    where: searchConditionObject
  });
  let deletedUsersArray = [];
  for (let i = 0; i < users.length; i++) {
    let tempDeletedUser = await users[i].destroy();
    deletedUsersArray.push(tempDeletedUser);
  }

  return deletedUsersArray;
};
