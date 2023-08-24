const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Dog',
    },
    {
        category_name: 'Cat',
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;