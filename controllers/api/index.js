const router = require("express").Router();
const petRoutes = require("./petRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");

router.use("/petRoutes", petRoutes);
router.use("/categoryRoutes", categoryRoutes);
router.use("/userRoutes", userRoutes);

module.exports = router;
