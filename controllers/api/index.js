const router = require("express").Router();
const petRoutes = require("./petRoutes");
const adoptionCenterRoutes = require("./adoptionCenterRoutes");

router.use("/petRoutes", petRoutes);
router.use("/adoptionCenterRoutes", adoptionCenterRoutes);

module.exports = router;
