'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecialTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SpecialTool.init({
    uuid: DataTypes.STRING,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN,
    created_by: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'SpecialTool',
    tableName: "tb_m_special_tool"
  });
  return SpecialTool;
};