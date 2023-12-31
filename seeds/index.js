const seedCategories = require("./category-seeds");
const seedPets = require("./pet-seeds");
const seedUserData = require("./userData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedPets();
  console.log("\n----- PETS SEEDED -----\n");

  await seedUserData();
  console.log("\n----- USER DATA SEEDED -----\n");

  process.exit(0);
};

seedAll();
