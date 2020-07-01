// * Uses the sequelize-fixtures lib to add sample data to the DB
// * Imports models from the db setup & config file

// TODO: Should probably await the completion of the "alter" process
// TODO: or any other connection operations before running this bit
// TODO: (or any other async thing happening in db setup file)

const sequelizeFixtures = require('sequelize-fixtures');

const path = require('path');

const { sequelize } = require(path.join(
  __dirname,
  '../../../app/utils/database'
));

const { models } = sequelize;

// TODO: cleanup this callback mess
// * The order of these operations seems to be very important.
// * Make sure to maintain it whenever you edit it
sequelizeFixtures.loadFile(makePath('../fixtures/section.js'), models).then(function () {
  sequelizeFixtures
    .loadFile(makePath('../fixtures/student.js'), models)
    .then(function () {
      sequelizeFixtures
        .loadFile(makePath('../fixtures/paymentGroup.js'), models)
        .then(function () {
          sequelizeFixtures
            .loadFile(makePath('../fixtures/Exam.js'), models)
            .then(function () {
              sequelizeFixtures
                .loadFile(makePath('../fixtures/warning.js'), models)
                .then(function () {
                  sequelizeFixtures
                    .loadFile(makePath('../fixtures/*.js'), models)
                    .then(function () {});
                });
            });
        });
    });
});

// TODO: move to utils
function makePath(relativePath) {
  return path.join(__dirname, relativePath);
}
