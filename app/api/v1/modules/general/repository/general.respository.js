const models = require("../../../common/models");
const ono = require("ono");
const { Op } = require("sequelize");

const { Category } = models;

async function getAllCategory(req, res) {
  try {
    // Find posts based on filters and pagination
    let allCategory;
    const id = req.params.id;
    if (!isNaN(id)) {
      allCategory = await Category.findAll({
        where: {
          [Op.or]: [{ category_id: !isNaN(id) ? Number(id) : null }],
        },
        attributes: ["id", "name", "category_code", "category_id"],
      });
    } else {
      const category = await Category.findOne({
        where: {
          category_code: id,
        },
      });
      allCategory = await Category.findAll({
        where: {
          category_id: category.id,
        },
        attributes: ["id", "name", "category_code", "category_id"],
      });
    }

    // Check if there are categories
    if (!allCategory || allCategory.length === 0) {
      allCategory = [];
    }

    // Return the paginated result
    return allCategory;
  } catch (error) {
    // Handle errors
    throw ono({ message: error.message, status: error.status });
  }
}

async function getAllSubCategory(req, res) {
  try {
    // Find posts based on filters and pagination
    const allCategoryData = await Category.findOne({
      where: { id: req.params.category_id },
      include: [
        {
          model: Category,
          as: "children",
          include: [
            {
              model: Category,
              as: "children",
              include: [
                {
                  model: Category,
                  as: "children", // Recursive nesting
                  attributes: ["id", "name", "category_code", "category_id"],
                },
              ],
              attributes: ["id", "name", "category_code", "category_id"],
            },
          ],
          attributes: ["id", "name", "category_code", "category_id"],
        },
      ],
      attributes: ["id", "name", "category_code", "category_id"],
    });

    function flattenCategories(category) {
      let result = [];
      if (category.children && category.children.length > 0) {
        category.children.forEach((child) => {
          result.push(child.id);
          result = result.concat(flattenCategories(child));
        });
      } else {
        result.push(allCategoryData.dataValues.id);
      }
      return result;
    }
    const allSubCategories = flattenCategories(allCategoryData);
    return allSubCategories;
  } catch (error) {
    throw ono({ message: error.message, status: error.status });
  }
}

async function getCategoryDetails(req, res) {
  try {
    // Find posts based on filters and pagination
    const categoryData = await Category.findOne({
      where: { id: +req.params.id },
      attributes: ["id", "name", "category_code", "category_id"],
    });
    return categoryData;
  } catch (error) {
    // Handle errors
    throw ono({ message: error.message, status: error.status });
  }
}

module.exports = { getAllCategory, getAllSubCategory, getCategoryDetails };
