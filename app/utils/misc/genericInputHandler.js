// * takes the event, the name and value destructured from second argument,
// * and stateKey which is the key of the object to update in the state

module.exports = function(e, { name, type, value, checked }, stateKey) {
  let stateDataCopy = { ...this.state[stateKey] };
  // checks if the element type is a checkbox, because then
  // it's value would be stored in the "checked" variable
  stateDataCopy[name] = type == 'checkbox' ? checked : value;
  this.setState({ [stateKey]: stateDataCopy });
};
