const { Pet } = require('../models');

const petData = [
    {
        pet_name: 'Bob',
        age: 3,
        breed: 'Staff',
        category_id: 1,
    },
    {
        pet_name: 'Oscar',
        age: 5,
        breed: 'Siamese',
        category_id: 2,   
    },
];

const seedPets = () => Pet.bulkCreate(productData);

module.exports= seedPets;