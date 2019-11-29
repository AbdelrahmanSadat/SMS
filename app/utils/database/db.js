// * Database setup, connection, and configuration

// TODO: db path (file should be outside src?)
// TODO: db seeding

/* 
  ? There are some instances were we may not want webpack
  ? to bundle particular assets, like those being consumed by
  ? modules like fs. Here is where we can put them and then
  ? reliably access them in both development and production. 
  ? electron-webpack project structure
*/

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

module.exports = function(path) {
  // If the database file didn't exist before,
  // Sequelize will create it (no need to use sqlite3)
  let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path
  });

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
  // hasMany connects one source to many targets
  // creates an foreign key of the source in the
  // target's table
  // will create the attribute SectionId in Student
  Section.hasMany(Student);
  // Creates student and section refs in attendance
  Student.hasMany(Attendance);
  Section.hasMany(Attendance);
  // creates section ref in paymentGroup
  Section.hasMany(PaymentGroup);
  
  // Student join tables
  Student.belongsToMany(PaymentGroup, {
    through: StudentFees
  });
  PaymentGroup.belongsToMany(Student, {
    through: StudentFees
  });

  Student.belongsToMany(Exam, {
    through: StudentExam
  });
  Exam.belongsToMany(Student, {
    through: StudentExam
  });

  Student.belongsToMany(Warning, {
    through: StudentWarning
  });
  Warning.belongsToMany(Student, {
    through: StudentWarning
  });

  console.log(Warning)
  console.log(StudentWarning)

  // Testing the connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');

      sequelize
        // Setting force to "true" drops the database on changes
        // TODO: remove force
        .sync({
          force: true
        })
        .then(() => console.log('Synced'))
        .catch(error => {
          console.log(error);
        });
      return 0;
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  return {
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
