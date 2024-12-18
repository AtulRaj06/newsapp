const authRepository = require("../repository/auth.respository");
const responseService = require("../../../common/service/response.service");
const { s3FileUpload } = require("../../../../../helpers");

async function create(req, res) {
  try {
    const record = await authRepository.createUser(req);
    responseService.created(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function login(req, res) {
  try {
    const record = await authRepository.login(req.body);
    responseService.success(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function signout(req, res) {
  try {
    await authRepository.signout(req);
    responseService.success(req, res, "Logged out successfully");
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function uploadProfile(req, res) {
  try {
    const value = await s3FileUpload.uploadFileToS3(
      req.file.buffer,
      req.file.originalname
    );
    responseService.success(req, res, {
      url: value.Location,
      key: value.key,
    });
  } catch (err) {
    responseService.fail(req, res, err);
  }
}

async function deleteProfile(req, res) {
  try {
    const { fileKey } = req.body; // assuming the fileKey is passed in the request body

    if (!fileKey) {
      return responseService.fail(req, res, "File key is required.");
    }

    // Call the delete function from the s3FileUpload module
    await s3FileUpload.deleteFileFromS3(fileKey);

    // Send success response
    responseService.success(req, res, { message: "File deleted successfully" });
  } catch (err) {
    responseService.fail(req, res, err);
  }
}

module.exports = {
  create,
  login,
  signout,
  uploadProfile,
  deleteProfile,
};
