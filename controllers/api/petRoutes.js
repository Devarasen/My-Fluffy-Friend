const express = require("express");
const router = express.Router();
const { Pet, Category, AdoptionCenter } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [Category, AdoptionCenter],
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
      include: [Category, AdoptionCenter],
    });
    const formattedPetData = petData.get({ plain: true });
    res.status(200).json(formattedPetData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
