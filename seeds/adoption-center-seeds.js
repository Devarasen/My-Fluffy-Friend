const { AdoptionCenter } = require('../models');

const adoptionCenterData = [
    {
        id: 1,
        center_name: 'Sutherland Shire Animal Shelter',
        address: '8 Production Rd, Taren Point NSW 2229',
        pet_id: 1,
    },
];

const seedAdoptionCenters = () => Category.bulkCreate(adoptionCenterData);

module.exports = seedAdoptionCenters;