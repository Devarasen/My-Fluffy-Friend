const express = require("express");
const router = express.Router();
const { Pet, Category } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [Category],
    });
    const formattedPetData = petData.map((pet) => pet.get({ plain: true }));
    res.status(200).json(formattedPetData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [Category],
    });
    const formattedPetData = petData.get({ plain: true });
    res.status(200).json(formattedPetData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/post-pet", async (req, res) => {
  try {
    const petData = await Pet.create({
      pet_name: req.body.petName,
      breed: req.body.breed,
      age: req.body.age,
    });

    res.status(200).json(petData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
