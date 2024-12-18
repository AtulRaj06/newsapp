"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        field: "firstName",
        type: DataTypes.STRING,
      },
      lastName: {
        field: "lastName",
        type: DataTypes.STRING,
      },
      email: {
        field: "email",
        type: DataTypes.STRING,
      },
      password: {
        field: "password",
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
      tableName: "users",
      timestamps: true,
      underscored: true,
    }
  );
  return User;
};
