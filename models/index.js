// const User = require('./User');
const Pet = require('./Pet'); 
const Category = require('./Category'); 
const AdoptionDate = require('./AdoptionDate'); 
const AdoptionCenter = require('./AdoptionCenter'); 

Pet.belongsTo(Category, {
  foreignKey: 'category_id'
});

Category.hasMany(Pet, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Pet.hasMany(AdoptionDate, {
  foreignKey: 'pet_id'
});

Pet.hasMany(AdoptionCenter, {
  foreignKey: 'pet_id'
});

AdoptionCenter.belongsTo(Pet, { 
  foreignKey: 'pet_id'
});

AdoptionDate.belongsTo(Pet, { 
  foreignKey: 'pet_id'
});

AdoptionDate.belongsTo(AdoptionCenter, { 
  foreignKey: 'adoption_center_id'
});



module.exports = { Pet, Category, AdoptionDate, AdoptionCenter };
