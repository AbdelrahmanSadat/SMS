// * takes the event, the name and value destructured from second argument,
// * and stateKey which is the key of the object to update in the state 

module.exports = function(e, { name, value }, stateKey) {
  let stateDataCopy = { ...this.state[stateKey] };
  stateDataCopy[name] = value;
  this.setState({ [stateKey]: stateDataCopy });
};
