const express = require("express");
const router = express.Router();
const authRoutes = require("./modules/auth/routes/auth.route");
const articleRoutes = require("./modules/article/routes/article.route");
const generalRoutes = require("./modules/general/routes/general.route");

router.use("/auth", authRoutes);
router.use("/article", articleRoutes);
router.use("/general", generalRoutes);

module.exports = router;
