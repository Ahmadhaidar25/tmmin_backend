"use strict";
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      uuid: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      division_id: DataTypes.INTEGER,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      created_by: DataTypes.INTEGER,
    },
    { tableName: "tb_m_department", paranoid: true, deletedAt: "deletedAt" }
  );
  Department.associate = function (models) {
    // associations can be defined here
    Department.belongsTo(models.Division, {
      foreignKey: "division_id",
      as: "division",
    });
    Department.belongsTo(models.Plant, {
      foreignKey: "plant_id",
      as: "plant",
    });
    Department.belongsTo(models.Company, {
      foreignKey: "company_id",
      as: "company",
    });
  };
  return Department;
};
