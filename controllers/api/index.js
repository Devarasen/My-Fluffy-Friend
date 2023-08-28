const router = require("express").Router();
const petRoutes = require("./petRoutes");
const adoptionCenterRoutes = require("./adoptionCenterRoutes");
const categoryRoutes = require("./categoryRoutes");

router.use("/petRoutes", petRoutes);
router.use("/adoptionCenterRoutes", adoptionCenterRoutes);
router.use("/categoryRoutes", categoryRoutes);

module.exports = router;
