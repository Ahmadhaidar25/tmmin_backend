"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cell = sequelize.define(
    "Cell",
    {
      uuid: DataTypes.STRING,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      company_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      division_id: DataTypes.INTEGER,
      department_id: DataTypes.INTEGER,
      line_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
    },

    { tableName: "tb_m_cell", paranoid: true, deletedAt: "deletedAt" }
  );
  Cell.associate = function (models) {
    // associations can be defined here
    Cell.belongsTo(models.Company, {
      foreignKey: "company_id",
      as: "company",
    });
    Cell.belongsTo(models.Plant, {
      foreignKey: "plant_id",
      as: "plant",
    });
    Cell.belongsTo(models.Division, {
      foreignKey: "division_id",
      as: "division",
    });
    Cell.belongsTo(models.Department, {
      foreignKey: "department_id",
      as: "department",
    });
    Cell.belongsTo(models.Line, {
      foreignKey: "line_id",
      as: "line",
    });
  };
  return Cell;
};
