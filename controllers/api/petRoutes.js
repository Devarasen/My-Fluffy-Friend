const router = require("express").Router();
const { Pet } = require("../../models");

router.get("/", async (req, res) => {
  try {
    // const petData = await Pet.findAll();

    // res.status(200).json(petData);
    res.status(200).json({ message: "Operation successful!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
