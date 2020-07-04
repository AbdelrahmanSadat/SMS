// * Database setup, connection, and configuration
// TODO: Refactor this file. check:
// TODO: https://github.com/sequelize/express-example/blob/master/models/index.js

// TODO: Utilize the config file for the DB, and change the DB config
// TODO: according to environment (dev, test, prod) (check url above)

// TODO: db path (file should be outside src?)
// * Currently the path is relative to where this code runs
// * Which is not preferrable, especially for production purposes.


const { Sequelize } = require('sequelize');

let attendance = require('../../models/attendance');
let exam = require('../../models/exam');
let expenses = require('../../models/expense');
let income = require('../../models/income');
let paymentGroup = require('../../models/paymentGroup');
let section = require('../../models/section');
let student = require('../../models/student');
let studentExam = require('../../models/studentExam');
let studentFees = require('../../models/studentFees');
let studentWarning = require('../../models/studentWarning');
let user = require('../../models/user');
let warning = require('../../models/warning');

// * A function that creates a db connection, defines the
// *? models on that db, and syncs the models to the db, I think.
// * params: a path to the db (to either create if it doesn't
// * exist or to connect to an existing db)
// * returns all the models and the created sequelize connection
module.exports = function(path) {
  // If the database file didn't exist before,
  // Sequelize will create it (no need to use sqlite3)
  let sequelize = new Sequelize({
    // creates a connection th the db
    dialect: 'sqlite',
    storage: path,
    logging: false
  });

  // ? Defines models on the db we connected to
  let Attendance = attendance(sequelize);
  let Exam = exam(sequelize);
  let Expense = expenses(sequelize);
  let Income = income(sequelize);
  let PaymentGroup = paymentGroup(sequelize);
  let Section = section(sequelize);
  let Student = student(sequelize);
  let StudentExam = studentExam(sequelize);
  let StudentFees = studentFees(sequelize);
  let StudentWarning = studentWarning(sequelize);
  let User = user(sequelize);
  let Warning = warning(sequelize);

  // * Creating Associations
  // will create the attribute SectionId in Student
  Section.hasMany(Student);
  Student.belongsTo(Section);

  // Creates student refs in attendance
  Student.hasMany(Attendance);
  Attendance.belongsTo(Student);

  // Creates section ref in attendance
  Section.hasMany(Attendance, {
    // The 'alter' option of the 'sync' function sometimes caused
    // the removal of certain columns' data (foreign keys)
    // on startups and complete refreshing of the app.
    // This may have been caused by the default CASCADE behaviour
    // on the deletion of the referenced row (deletions by 'alter'),
    // or by cyclic dependencies between the tables.
    // These issues are resloved by the following options respectively
    // onDelete: "NO ACTION"
    // constraints: false,});
  });
  Attendance.belongsTo(Section);

  // creates section ref in paymentGroup
  Section.hasMany(PaymentGroup);
  PaymentGroup.belongsTo(Section);

  // Joins Student and PaymentGroup through StudentFees
  Student.belongsToMany(PaymentGroup, {
    through: StudentFees,
    unique: false
  });
  PaymentGroup.belongsToMany(Student, {
    through: StudentFees,
    unique: false
  });

  // Joins Student and Exam through StudentExam
  // TODO: each student should be evaluated for each exam once
  // TODO: so "unique" should be true
  Student.belongsToMany(Exam, {
    through: StudentExam,
    unique: false
  });
  Exam.belongsToMany(Student, {
    through: StudentExam,
    unique: false
  });

  // Joins Student and Warning through StudentWarning
  Student.belongsToMany(Warning, {
    through: StudentWarning,
    unique: false
  });
  Warning.belongsToMany(Student, {
    through: StudentWarning,
    unique: false
  });

  // Testing the connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');

      sequelize
        // Setting force to "true" drops the database on changes
        // to the models
        // TODO: production: remove alter: true
        .sync({ alter: false })
        .then(() => console.log('Synced'))
        .catch(error => {
          console.log(error);
        });
      return 0;
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  // exports the models so that the can be used from anywhere else
  // given that a connection has been established earlier
  // ? this may not be the optimal way to implement this
  // TODO?: Log the sequelize object alone. It contains all the
  // TODO?: models already, so exporting them again is redundant
  return {
    sequelize,
    Attendance,
    Exam,
    Expense,
    Income,
    PaymentGroup,
    Section,
    Student,
    StudentExam,
    StudentFees,
    StudentWarning,
    User,
    Warning
  };
};
