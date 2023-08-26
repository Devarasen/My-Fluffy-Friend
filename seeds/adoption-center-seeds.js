const { AdoptionCenter } = require('../models');

const adoptionCenterData = [
    {
        center_name: 'Sutherland Shire Animal Shelter',
        address: '8 Production Rd, Taren Point NSW 2229',
        pet_id: [1,5,9],
    },
    {
        center_name: 'Sydney Dogs & Cats Home',
        address: '442-446 Liverpool Rd, Strathfield South NSW 2136',
        pet_id: [2,6,10],
    },
    {
        center_name: 'Pound Paws',
        address: 'Building 43/142 Addison Rd, Marrickville NSW 2204',
        pet_id: [3,7],
    },
    {
        center_name: 'RSPCA NSW Sydney Shelter',
        address: '201 Rookwood Rd, Yagoona NSW 2199',
        pet_id: [4,8],
    },
];

const seedAdoptionCenters = () => AdoptionCenter.bulkCreate(adoptionCenterData);

module.exports = seedAdoptionCenters;