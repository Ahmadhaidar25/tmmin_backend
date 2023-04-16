"use strict";
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define(
    "Company",
    {
      uuid: DataTypes.STRING,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      website: DataTypes.STRING,
      phone: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
      created_by: DataTypes.INTEGER,
    },
    {
      tableName: "tb_m_company",
      paranoid: true,
      deletedAt: "deletedAt",
    }
  );
  Company.associate = function (models) {
    // associations can be defined here
  };
  return Company;
};
