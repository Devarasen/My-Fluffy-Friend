const router = require("express").Router();
const { Pet } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const petData = await Pet.findAll();
    res.status(200).json(petData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const petData = await Pet.findByPk();
  res.render("main", { petData });
});

router.get("/:id", async (req, res) => {
  const petData = await Pet.findByPk(req.params.id);
  res.status(200).json(petData);
});

module.exports = router;
