"use strict";
module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define(
    "Plant",
    {
      uuid: DataTypes.STRING,
      company_id: DataTypes.INTEGER,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      created_by: DataTypes.INTEGER,
    },
    {
      tableName: "tb_m_plant",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  Plant.associate = function (models) {
    // associations can be defined here
    Plant.belongsTo(models.Company, {
      foreignKey: "company_id",
      as: "company",
    });
  };
  return Plant;
};
