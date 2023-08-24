const { AdoptionDate } = require('../models');

const adoptionDateData = [
    {
      id: 1,
      adoption_center_id: 1,
      pet_id: 2,
      available_from: Datatype.Date,  
    },
];

const seedAdoptionDates = () => AdoptionDate.bulkCreate(adoptionDateData);

module.exports = seedAdoptionDates;