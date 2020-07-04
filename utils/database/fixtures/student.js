module.exports = [
  {
    model: 'student',
    data: {
      id: 1,
      name: 'Student Mc.Pupilson',
      email: 'email@email.org',
      phoneNumber: '0000000',
      parentName: 'Mr. Mc.Pupilson',
      parentPhoneNumber: '00000000',
      parentOccupation: 'حرامي',
      address: '221B Baker Street',
      notes: 'This is a very good student',
      status: 'active',
      attendanceCounter: 0,
      reservationDate: '2020-07-01T00:00:00+02:00',
      school: 'School of things',
      class: '1st',
      sectionId: 1,
      paymentGroups: [
        {
          id: 1,
          _through: {
            id: 1,
            name: 'Unnecessary Fees',

            dueDate: '2020-07-01T00:00:00+02:00',

            value: 593.25,

            paid: false,
          },
        },
        {
          id: 1,
          _through: {
            id: 2,
            name: 'Added Value Tax',

            dueDate: '2020-07-01T00:00:00+02:00',

            value: 20.0,

            paid: false,
          },
        },
        {
          id: 1,
          _through: {
            id: 3,
            name: 'Insurance',

            dueDate: '2020-07-01T00:00:00+02:00',

            value: 500.0,

            paid: false,
          },
        },
      ],
      exams: [
        {
          id: 1,
          _through: {
            id: 1,
            examId: 1,
            passing: false,
            score: 21,
          },
        },
        {
          id: 1,
          _through: {
            id: 2,
            examId: 1,
            passing: true,
            score: 52,
          },
        },
      ],
      warnings: [
        {
          id: 2,
          _through: {
            id: 1,
          },
        },
      ],
    },
  },
];
