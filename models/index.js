// const User = require('./User');
const Pet = require("./Pet");
const Category = require("./Category");
const User = require("./User");

Pet.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Pet, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

module.exports = { Pet, Category, User };
