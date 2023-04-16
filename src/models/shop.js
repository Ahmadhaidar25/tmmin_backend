"use strict";
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    "Shop",
    {
      uuid: DataTypes.UUID,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      company_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      division_id: DataTypes.INTEGER,
      department_id: DataTypes.INTEGER,
      line_id: DataTypes.INTEGER,
      cell_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
    },
    { tableName: "tb_m_shop", paranoid: true, deletedAt: "deletedAt" }
  );
  Shop.associate = function (models) {
    // associations can be defined here
    Shop.belongsTo(models.Company, {
      foreignKey: "company_id",
      as: "company",
    });
    Shop.belongsTo(models.Plant, {
      foreignKey: "plant_id",
      as: "plant",
    });
    Shop.belongsTo(models.Division, {
      foreignKey: "division_id",
      as: "division",
    });
    Shop.belongsTo(models.Department, {
      foreignKey: "department_id",
      as: "department",
    });
    Shop.belongsTo(models.Line, {
      foreignKey: "line_id",
      as: "line",
    });
    Shop.belongsTo(models.Cell, {
      foreignKey: "cell_id",
      as: "cell",
    });
  };
  return Shop;
};
