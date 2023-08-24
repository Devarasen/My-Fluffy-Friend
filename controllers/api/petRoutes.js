const router = require("express").Router();
const { Pet } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const PetData = await Pet.findAll();

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
