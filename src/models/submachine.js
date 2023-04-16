"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubMachine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubMachine.belongsTo(models.Machine, {
        foreignKey: "machine_id",
        as: "machine",
      });
      SubMachine.belongsTo(models.Division, {
        foreignKey: "division_id",
        as: "division",
      });
      SubMachine.belongsTo(models.Department, {
        foreignKey: "department_id",
        as: "department",
      });
      SubMachine.belongsTo(models.Line, {
        foreignKey: "line_id",
        as: "line",
      });
      SubMachine.belongsTo(models.Cell, {
        foreignKey: "cell_id",
        as: "cell",
      });
    }
  }
  SubMachine.init(
    {
      uuid: DataTypes.STRING,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      machine_id: DataTypes.INTEGER,
      company_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      division_id: DataTypes.INTEGER,
      department_id: DataTypes.INTEGER,
      line_id: DataTypes.INTEGER,
      cell_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      tableName: "tb_m_sub_machine",
      modelName: "SubMachine",
    }
  );
  return SubMachine;
};
