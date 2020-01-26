//  ! Doesn't work. I've given up
// !*Something about sequelize.import
// !* and curcular dependencies

let exam = require('./exam');
let payment = require('./payment');
let paymentGroup = require('./paymentGroup');
let section = require('./section');
let student = require('./student');
let studentExam = require('./studentExam');
let studentPaymentGroup = require('./studentPaymentGroup');
let user = require('./user');
let warning = require('./warning');

module.exports = function(sequelize) {
  let Exam = exam(sequelize);
  let Payment = payment(sequelize);
  let PaymentGroup = paymentGroup(sequelize);
  let Section = section(sequelize);
  let Student = student(sequelize);
  let StudentExam = studentExam(sequelize);
  let StudentPaymentGroup = studentPaymentGroup(sequelize);
  let User = user(sequelize);
  let Warning = warning(sequelize);

  let models = {
    Exam,
    Attendance,
    Payment,
    PaymentGroup,
    Section,
    Student,
    StudentExam,
    StudentPaymentGroup,
    User,
    Warning
  };

  return models;
};
