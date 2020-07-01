module.exports = [
  {
    model: 'user',
    data: {
      id: 1,
      username: 'Mr. User',
      age: 35,
      authorizationLevel: 0,
      hashedPassword: 'hash hash',
      salt: 'no thank you',
    },
  },
  {
    model: 'user',
    data: {
      id: 2,
      username: 'Mr. Other User',
      age: 35,
      authorizationLevel: 1,
      hashedPassword: 'Hash Browns',
      salt: 'lake',
    },
  },
];
