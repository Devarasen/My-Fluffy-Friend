const { Pet } = require("../models");
const fs = require("fs");

const petData = [
  {
    pet_name: "Bob",
    age: 3,
    breed: "Staffordshire Bull Terrier",
    category_id: 1,
    adoption_center_id: 1,
    image: "/images/Bob.jpeg",
  },
  {
    pet_name: "Oscar",
    age: 5,
    breed: "Siamese",
    category_id: 2,
    adoption_center_id: 4,
    image: "/images/Oscar.jpeg",
  },
  {
    pet_name: "Buddy",
    age: 2,
    breed: "Golden Retriever",
    category_id: 1,
    adoption_center_id: 1,
    image: "/images/Buddy.jpeg",
  },
  {
    pet_name: "Luna",
    age: 1,
    breed: "Maine Coon",
    category_id: 2,
    adoption_center_id: 3,
    image: "/images/Luna.jpeg",
  },
  {
    pet_name: "Charlie",
    age: 4,
    breed: "Labrador",
    category_id: 1,
    adoption_center_id: 4,
    image: "/images/Charlie.jpg",
  },
];


const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
