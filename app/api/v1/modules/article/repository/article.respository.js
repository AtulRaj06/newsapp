const models = require("../../../common/models");
const ono = require("ono");
const he = require("he");
const { Op } = require("sequelize");
const generalRepository = require("../../general/repository/general.respository");
const { Article, Category } = models;
const filterMainCategories = [
  "bidi_a",
  "kasuwanci",
  "wasanni",
  "yanayi_a_yau",
  "siyassa",
  "addini",
  "silma_kannywood",
];

async function createArticle(req, res) {
  const {
    title,
    description,
    content,
    author,
    published,
    media,
    parent_main_category_id,
    parent_sub_category_id,
    category_id,
  } = req.body;

  if (!title || !description || !published || !content) {
    throw ono({ code: "Please fill all the details", status: 404 });
  }
  const newArticle = await Article.create({
    title,
    description,
    author,
    published,
    parent_main_category_id,
    parent_sub_category_id,
    category_id,
    content,
    media,
    media_type: media?.type,
  });

  if (!newArticle) {
    res.status(400);
    throw new Error(" invalid data");
  }
  return newArticle;
}

async function getAllArticle(req, res) {
  try {
    const page = parseInt(req.body.pagination.page) || 1;
    const limit = parseInt(req.body.pagination.limit) || 10;

    
    const offset = (page - 1) * limit;

    let category_code = req?.body?.filters?.category_code;
    let category_id = parseInt(req?.body?.filters?.category_id);
    let allSubCategoriesAndCategory;
    
    if (category_id && category_id !== 0) {
      allSubCategoriesAndCategory = await generalRepository.getAllSubCategory({
        params: { category_id: category_id },
      });
      allSubCategoriesAndCategory = [...new Set(allSubCategoriesAndCategory)];
    }

    
    let filters = {};
    if (allSubCategoriesAndCategory) {
      filters.category_id = { [Op.in]: allSubCategoriesAndCategory };
    }
    if (req?.body?.filters?.search) {
      filters.title = {
        [Op.iLike]: `%${req.body.filters.search}%`,
      };
    }

   
    const allArticle = await Article.findAndCountAll({
      where: filters,
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name", "category_code", "category_id"],
        },
      ],
      limit: limit,
      order: [["updated_at", "DESC"]],
      offset: offset,
    });
    if (allArticle.rows.length > 0) {
      allArticle.rows.forEach((article) => {
        
        let blocks = article.dataValues.content.blocks;

        
        if (Array.isArray(blocks)) {
          blocks.forEach((block) => {
            if (block?.data?.text) {
              block.data.text = he.decode(block.data.text);
            }

            if (block?.data?.items?.length > 0) {
              block.data.items.forEach((item) => {
                if (item?.content) {
                  item.content = he.decode(item.content);
                }
              });
            }
          });

         } else {
          console.warn("Blocks are not an array for article:", article.id);
        }
      });
    }

    if (!allArticle || allArticle.length === 0) {
      throw ono({
        message: "No articles found for the given criteria.",
        status: 404,
      });
    }
    return allArticle;
  } catch (error) {
    throw ono({ message: error.message, status: error.status });
  }
}

async function getArticle(req, res) {
  try {
    if (!req.params.id) {
      throw ono({ message: "Article id not found", status: 404 });
    }
    const article = await Article.findOne({
      where: {
        id: +req.params.id,
      },
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["id", "name", "category_code", "category_id"],
        },
        {
          model: Category,
          as: "parentMaincategory",
          attributes: ["id", "name", "category_code", "category_id"],
        },
        {
          model: Category,
          as: "parentSubcategory",
          attributes: ["id", "name", "category_code", "category_id"],
        },
      ],
    });

    await Article.update(
      { view_count: article.view_count + 1 },
      {
        where: {
          id: +req.params.id,
        },
        silent: true,
      }
    );
    if (!article) {
      throw ono({
        message: "No article found for the given criteria.",
        status: 404,
      });
    }
    let blocks = article?.dataValues?.content?.blocks; 
    if (blocks?.length > 0) {
      blocks.forEach((block) => {
        if (block?.data?.text) {
          block.data.text = he.decode(block.data.text);
        }

       
        block?.data?.items?.forEach((item) => {
          if (item.content) {
            item.content = he.decode(item.content);
          }
        });
      });
    }

   
    article.dataValues.content.blocks = blocks;

  
    return article;
  } catch (error) {
    throw ono({ message: error.message, status: error.status });
  }
}

async function updateArticle(req, res) {
  try {
    if (!req.params.id) {
      throw ono({ message: "Article id not found", status: 404 });
    }
    const {
      title,
      description,
      content,
      author,
      published,
      media,
      parent_main_category_id,
      parent_sub_category_id,
      category_id,
    } = req.body;

    const article = await Article.update(
      {
        title,
        description,
        author,
        published,
        content,
        media,
        media_type: media?.type,
        parent_main_category_id,
        parent_sub_category_id,
        category_id,
      },
      {
        where: {
          id: +req.params.id,
        },
      }
    );

    if (!article) {
      throw ono({
        message: "No article found for the given criteria.",
        status: 404,
      });
    }

    return article;
  } catch (error) {
    throw ono({ message: error.message, status: error.status });
  }
}

async function deleteArticle(req, res) {
  try {
   
    if (!req.params.id) {
      throw ono({ message: "Article id not found", status: 404 });
    }
    const article = await Article.destroy({
      where: { id: +req.params.id },
    });

    if (!article) {
      throw ono({
        message: "No article found for the given criteria.",
        status: 404,
      });
    }

    return {
      id: req.params.id,
      message: "Article deleted sucessfully",
    };
  } catch (error) {
    throw ono({ message: error.message, status: error.status });
  }
}


module.exports = {
  createArticle,
  getAllArticle,
  getArticle,
  updateArticle,
  deleteArticle,
};
