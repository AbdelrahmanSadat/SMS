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
let payment = require('../../models/payment');
let paymentGroup = require('../../models/paymentGroup');
let section = require('../../models/section');
let student = require('../../models/student');
let studentExam = require('../../models/studentExam');
let studentFees = require('../../models/studentFees');
let user = require('../../models/user');
let warning = require('../../models/warning');

module.exports = function(path) {
  // If the database file didn't exist before,
  // Sequelize will create it (no need to use sqlite3)
  let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path
  });

  // Testing the connection
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      // TODO: remove unused variable assignments
      let Attendance = attendance(sequelize);
      let Exam = exam(sequelize);
      let Expense = expenses(sequelize);
      let Income = income(sequelize);
      let Payment = payment(sequelize);
      let PaymentGroup = paymentGroup(sequelize);
      let Section = section(sequelize);
      let Student = student(sequelize);
      let StudentExam = studentExam(sequelize);
      let StudentFees = studentFees(sequelize);
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
      // creates ref to paymentGroup, student and user in
      // the payment model
      PaymentGroup.hasMany(Payment);
      Student.hasMany(Payment);
      User.hasMany(Payment);
      // creates section ref in paymentGroup
      Section.hasMany(PaymentGroup);
      // TODO: the student join tables and shit
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

      sequelize
        // Setting force to "true" drops the database on changes
        // TODO: remove force
        .sync({ force: true })
        .then(() => {
          console.log('synced');
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

  return sequelize;
};
