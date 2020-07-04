module.exports = [
  {
    model: 'paymentGroup',
    data: {
      id: 1,
      name: 'PG1',
      type: 'monthly',
      value: 100,
      allowedPeriod: 10,
      sectionId: 1,
    },
  },
  {
    model: 'paymentGroup',
    data: {
      id: 3,
      name: 'PG3',
      type: 'reservation',
      value: 50,
      allowedPeriod: 1,
      sectionId: 1,
    },
  },
];
