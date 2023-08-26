const { AdoptionDate } = require('../models');

const adoptionDateData = [
    {
      adoption_center_id: 1,
      pet_id: 5,
      available_from: Datatype.Date,  
    },
    {
      adoption_center_id: 2,
      pet_id: 2,
      available_from: Datatype.Date,  
    },
    {
      adoption_center_id: 3,
      pet_id: 3,
      available_from: Datatype.Date,  
    },
    {
      adoption_center_id: 4,
      pet_id: 8,
      available_from: Datatype.Date,  
    },
];

const seedAdoptionDates = () => AdoptionDate.bulkCreate(adoptionDateData);

module.exports = seedAdoptionDates;