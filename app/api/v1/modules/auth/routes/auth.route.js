const express = require("express");
const authController = require("../controller/auth.controller");
const {
  verifyJWT,
} = require("../../../../.../../../helpers/middleware/middleware");
const multer = require("multer");
const upload = multer();
const router = express.Router();

router.route("/signup").post(authController.create);

router.route("/signin").post(authController.login);

router.route("/signout").post(verifyJWT, authController.signout);

router
  .route("/upload-image")
  .post(upload.single("file"), authController.uploadProfile);

router
  .route("/delete-image")
  .post(upload.single("file"), authController.deleteProfile);

module.exports = router;
