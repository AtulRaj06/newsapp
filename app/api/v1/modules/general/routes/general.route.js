const express = require("express");
const generalController = require("../controller/general.controller");

const router = express.Router();

router.route("/category/:id").get(generalController.getAllCategory);

router.route("/subcategory/:id").get(generalController.getAllSubCategory);

router.route("/category-data/:id").get(generalController.getCategoryDetails);

module.exports = router;
