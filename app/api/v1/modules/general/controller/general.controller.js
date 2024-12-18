const responseService = require("../../../common/service/response.service");
const generalRepository = require("../repository/general.respository");

async function getAllCategory(req, res) {
  try {
    const record = await generalRepository.getAllCategory(req);
    responseService.success(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function getAllSubCategory(req, res) {
  try {
    const record = await generalRepository.getAllSubCategory(req);
    responseService.success(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function getCategoryDetails(req, res) {
  try {
    const record = await generalRepository.getCategoryDetails(req);
    responseService.success(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

module.exports = { getAllCategory, getAllSubCategory, getCategoryDetails };
