const router = require("express").Router();
const { Pet, Category, AdoptionCenter } = require("../models");

router.get("/", async (req, res) => {
  return res.render("home");
});

router.get("/petRoutes", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [Category, AdoptionCenter],
    });
    const formattedPetData = petData.map((pet) => pet.get({ plain: true }));
    res.render("pets", { petData: formattedPetData });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/petRoutes/:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [Category, AdoptionCenter],
    });
    const formattedPetData = petData.get({ plain: true });
    res.render("pet", { petData: formattedPetData });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
