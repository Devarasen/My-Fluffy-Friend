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
    {
        pet_name: 'Buddy',
        age: 2,
        breed: 'Golden Retriever',
        category_id: 1,
    },
    {
        pet_name: 'Luna',
        age: 1,
        breed: 'Maine Coon',
        category_id: 2,
    },
    {
        pet_name: 'Charlie',
        age: 4,
        breed: 'Labrador',
        category_id: 1,
    },
    {
        pet_name: 'Mittens',
        age: 3,
        breed: 'Persian',
        category_id: 2,
    },
    {
        pet_name: 'Rocky',
        age: 6,
        breed: 'Bulldog',
        category_id: 1,
    },
    {
        pet_name: 'Simba',
        age: 2,
        breed: 'Sphynx',
        category_id: 2,
    },
    {
        pet_name: 'Daisy',
        age: 7,
        breed: 'Poodle',
        category_id: 1,
    },
    {
        pet_name: 'Whiskers',
        age: 4,
        breed: 'Scottish Fold',
        category_id: 2,
    },
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports= seedPets;