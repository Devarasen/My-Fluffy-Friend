const User = require('./User');
const Pet = require('./Pet'); 
const Category = require('./Category'); 
const AdoptionDate = require('./AdoptionDate'); 
const AdoptionCenter = require('./AdoptionCenter'); 

User.hasMany(Pet, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Pet.belongsTo(User, {
  foreignKey: 'user_id'
});

Pet.belongsTo(Category, {
  foreignKey: 'category_id'
});

Pet.hasOne(AdoptionDate, {
  foreignKey: 'pet_id'
});

Pet.hasOne(AdoptionCenter, {
  foreignKey: 'pet_id'
});

module.exports = { User, Pet, Category, AdoptionDate, AdoptionCenter };
