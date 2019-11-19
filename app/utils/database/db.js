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
let payment = require('../../models/payment');
let paymentGroup = require('../../models/paymentGroup');
let section = require('../../models/section');
let student = require('../../models/student');
let studentExam = require('../../models/studentExam');
let studentPaymentGroup = require('../../models/studentPaymentGroup');
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
      // TODO: remove the variable assignments
      let Attendance = attendance(sequelize);
      let Exam = exam(sequelize);
      let Payment = payment(sequelize);
      let PaymentGroup = paymentGroup(sequelize);
      let Section = section(sequelize);
      let Student = student(sequelize);
      let StudentExam = studentExam(sequelize);
      let StudentPaymentGroup = studentPaymentGroup(sequelize);
      let User = user(sequelize);
      let Warning = warning(sequelize);

      sequelize
        // Setting force to "true" drops the database on changes
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
