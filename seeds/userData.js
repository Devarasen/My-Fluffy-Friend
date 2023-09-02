const { User } = require("../models");

const userData = [
  {
    name: "Test User",
    email: "user@test.com",
    password: "password12345",
  },
];

const seedUserData = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUserData;
