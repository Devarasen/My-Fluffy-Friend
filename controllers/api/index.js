const router = require("express").Router();
const userRoutes = require("./userRoutes");
const petRoutes = require("./petRoutes");
const adoptionCenterRoutes = require("./adoptionCenterRoutes");

router.use("/users", userRoutes);
router.use("/petRoutes", petRoutes);
router.use("/adoptionCenterRoutes", adoptionCenterRoutes);

module.exports = router;
