const { Category } = require("../../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const categoryData = await Category.findByPk();
  res.render("main", { categoryData });
});

router.get("/:id", async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id);
  res.status(200).json(categoryData);
});

module.exports = router;
