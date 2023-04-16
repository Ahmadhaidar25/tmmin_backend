"use strict";
module.exports = (sequelize, DataTypes) => {
  const Machine = sequelize.define(
    "Machine",
    {
      uuid: DataTypes.STRING,
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      operation_number: DataTypes.STRING,
      serial_number: DataTypes.STRING,
      process_name: DataTypes.STRING,
      maker: DataTypes.STRING,
      pic: DataTypes.STRING,
      machine_type_id: DataTypes.INTEGER,
      release_year: DataTypes.INTEGER,
      company_id: DataTypes.INTEGER,
      plant_id: DataTypes.INTEGER,
      division_id: DataTypes.INTEGER,
      department_id: DataTypes.INTEGER,
      line_id: DataTypes.INTEGER,
      cell_id: DataTypes.INTEGER,
      created_by: DataTypes.INTEGER,
    },
    { tableName: "tb_m_machine", paranoid: true }
  );
  Machine.associate = function (models) {
    // associations can be defined here
    Machine.belongsTo(models.TypeMachine, {
      foreignKey: "machine_type_id",
      as: "type_machine",
    });
    Machine.belongsTo(models.Division, {
      foreignKey: "division_id",
      as: "division",
    });
    Machine.belongsTo(models.Department, {
      foreignKey: "department_id",
      as: "department",
    });
    Machine.belongsTo(models.Line, {
      foreignKey: "line_id",
      as: "line",
    });
    Machine.belongsTo(models.Cell, {
      foreignKey: "cell_id",
      as: "cell",
    });
  };
  return Machine;
};
