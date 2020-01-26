// ! Currently out of date and out of use


let faker = require("faker");
const sequelize = require("../db");
const User = require("../../../src/models/user")(sequelize);
const Student = require("../../../src/models/student")(sequelize);
const Section = require("../../../src/models/section")(sequelize);

Section.hasMany(Student);

// TODO: add any kind of error handling
// TODO: allow options arguments for customization
// TODO: set some static fields or use seeds or both
// TODO: make it asynchronous ?
// TODO: modularize it? to seed each model separately?
let seed = function() {
  for (let i = 0; i < 10; i++) {
    createUser();
    createStudent();
    createSection();
  }
};

module.exports = seed;

let createUser = function() {
  User.create({
    username: faker.name.findName(),
    age: faker.random.ageNumber(),
    authorizationLevel: 2,
    hashedPassword: faker.random.alphaNumeric(),
    salt: faker.random.alphaNumeric(),
    // not actually a field just testing if it'll
    // get saved (it doesn't)
    redHerring: faker.random.alphaNumeric()
  });
};

let createStudent = function() {
  Student.create({
    name: faker.name.findName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    parentName: faker.name.findName(),
    parentPhoneNumber: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    miscNotes: faker.company.catchPhrase(),
    school: faker.company.companyName(),
    // TODO:
    class: "1st"
  });
};

let createSection = function(){
  Section.create({
    name: faker.random.alphaNumeric(),
    session: faker.hacker.noun(),
    semester: "first",
    class: "1st",
    fees: faker.finance.amount(),
    startingDate: faker.date.past(),
    endingDate: faker.date.future(),
    counter: faker.random.number()
  })
}

// TODO: move or remove
faker.random.ageNumber = function() {
  return Math.floor(Math.random() * 100);
};
