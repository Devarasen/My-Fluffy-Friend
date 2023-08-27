const { AdoptionCenter } = require('../models');

const adoptionCenterData = [
    {
        center_name: 'Sutherland Shire Animal Shelter',
        address: '8 Production Rd, Taren Point NSW 2229',
    },
    {
        center_name: 'Sydney Dogs & Cats Home',
        address: '442-446 Liverpool Rd, Strathfield South NSW 2136',
    },
    {
        center_name: 'Pound Paws',
        address: 'Building 43/142 Addison Rd, Marrickville NSW 2204',
    },
    {
        center_name: 'RSPCA NSW Sydney Shelter',
        address: '201 Rookwood Rd, Yagoona NSW 2199',
    },
];

const seedAdoptionCenters = () => AdoptionCenter.bulkCreate(adoptionCenterData);

module.exports = seedAdoptionCenters;

