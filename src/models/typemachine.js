"use strict";
module.exports = (sequelize, DataTypes) => {
  const TypeMachine = sequelize.define(
    "TypeMachine",
    {
      uuid: DataTypes.UUID,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
    },
    { tableName: "tb_m_machine_type", paranoid: true }
  );
  TypeMachine.associate = function (models) {
    // associations can be defined here
  };
  return TypeMachine;
};
