const router = require("express").Router();
const { AdoptionCenter } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const adoptionCenterData = await AdoptionCenter.findAll();
    res.status(200).json({ adoptionCenterData });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const adoptionCenterData = await AdoptionCenter.findByPk();
  res.render("main", { adoptionCenterData });
});

router.get("/:id", async (req, res) => {
  const adoptionCenterData = await AdoptionCenter.findByPk(req.params.id);
  res.status(200).json(adoptionCenterData);
});

module.exports = router;
