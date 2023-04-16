"use strict";
module.exports = (sequelize, DataTypes) => {
  const Division = sequelize.define(
    "Division",
    {
      uuid: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      created_by: DataTypes.INTEGER,
    },
    { tableName: "tb_m_division", paranoid: true, deletedAt: "deletedAt" }
  );
  Division.associate = function (models) {
    // associations can be defined here
    Division.belongsTo(models.Company, {
      foreignKey: "company_id",
      as: "company",
    });
    Division.belongsTo(models.Plant, {
      foreignKey: "plant_id",
      as: "plant",
    });
  };
  return Division;
};
