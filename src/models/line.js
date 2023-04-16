"use strict";
module.exports = (sequelize, DataTypes) => {
  const Line = sequelize.define(
    "Line",
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
      created_by: DataTypes.INTEGER,
    },
    { tableName: "tb_m_line", paranoid: true, deletedAt: "deletedAt" }
  );
  Line.associate = function (models) {
    // associations can be defined here
    Line.belongsTo(models.Company, {
      foreignKey: "company_id",
      as: "company",
    });
    Line.belongsTo(models.Plant, {
      foreignKey: "plant_id",
      as: "plant",
    });
    Line.belongsTo(models.Division, {
      foreignKey: "division_id",
      as: "division",
    });
    Line.belongsTo(models.Department, {
      foreignKey: "department_id",
      as: "department",
    });
  };
  return Line;
};
