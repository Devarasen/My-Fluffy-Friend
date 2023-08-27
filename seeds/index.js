const seedCategories = require('./category-seeds');
const seedPets = require('./pet-seeds');
const seedAdoptionCenters = require('./adoption-center-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedAdoptionCenters();
  console.log('\n----- ADOPTION CENTERS SEEDED -----\n');

  await seedPets();
  console.log('\n----- PETS SEEDED -----\n');

  process.exit(0);
};

seedAll();






