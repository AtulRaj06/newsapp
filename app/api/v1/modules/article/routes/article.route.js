const express = require("express");
const articleController = require("../controller/article.controller");
const {  verifyJWT } = require("../../../../.../../../helpers/middleware/middleware");
const router = express.Router();

router.route("/create").post(verifyJWT, articleController.createArticle);

router.route("/all").post(articleController.getAllArticle);

router.route("/:id").get(articleController.getArticle);

router.route("/:id").put(verifyJWT, articleController.updateArticle);

router.route("/:id").delete(verifyJWT, articleController.deleteArticle);

module.exports = router;
