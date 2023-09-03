const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

// Catch-all route handler for any other unrecognized requests
router.use((req, res) => {
  res.status(404).type("text/html").send("<h1>Wrong Route!</h1>");
});

module.exports = router;
