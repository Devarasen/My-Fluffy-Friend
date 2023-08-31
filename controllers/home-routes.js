const router = require("express").Router();
const { Pet, Category, AdoptionCenter } = require("../models");

router.get("/", async (req, res) => {
  console.log("Accessed home route");
  console.log(req.session);
  return res.render("home", { logged_in: req.session.logged_in });
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

router.get("/post-adoption", async (req, res) => {
  return res.render("postAdoption");
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
