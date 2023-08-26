const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  return res.render("home");
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
