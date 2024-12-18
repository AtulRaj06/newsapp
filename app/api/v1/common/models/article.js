"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.Category, {
        as: "category",
        foreignKey: "category_id",
      });
      Article.belongsTo(models.Category, {
        as: "parentMaincategory",
        foreignKey: "parent_main_category_id",
      });
      Article.belongsTo(models.Category, {
        as: "parentSubcategory",
        foreignKey: "parent_sub_category_id",
      });
    }
  }
  Article.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      content: {
        type: DataTypes.JSONB,
      },
      author: {
        type: DataTypes.STRING,
      },
      published: {
        type: DataTypes.STRING,
      },
      media: {
        type: DataTypes.JSONB,
      },
      parent_main_category_id: {
        type: DataTypes.INTEGER,
      },
      parent_sub_category_id: {
        type: DataTypes.INTEGER,
      },
      category_id: {
        type: DataTypes.INTEGER,
      },
      view_count: {
        type: DataTypes.INTEGER,
      },
      media_type: {
        type: DataTypes.STRING,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "articles",
      timestamps: true,
      underscored: true,
    }
  );
  return Article;
};
