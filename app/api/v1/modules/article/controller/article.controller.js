const responseService = require("../../../common/service/response.service");
const articleRepository = require("../repository/article.respository");

async function createArticle(req, res) {
  try {
    const record = await articleRepository.createArticle(req);
    responseService.created(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function getAllArticle(req, res) {
  try {
    const record = await articleRepository.getAllArticle(req);
    responseService.success(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function getArticle(req, res) {
  try {
    const record = await articleRepository.getArticle(req);
    responseService.success(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function updateArticle(req, res) {
  try {
    const record = await articleRepository.updateArticle(req);
    responseService.updated(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

async function deleteArticle(req, res) {
  try {
    const record = await articleRepository.deleteArticle(req);
    responseService.deleted(req, res, record);
  } catch (e) {
    responseService.fail(req, res, e);
  }
}

module.exports = {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
};
