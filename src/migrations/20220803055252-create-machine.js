"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_m_machine", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      operation_number: {
        type: Sequelize.STRING,
      },
      sn: {
        type: Sequelize.STRING,
      },
      process_name: {
        type: Sequelize.STRING,
      },
      maker: {
        type: Sequelize.STRING,
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: { model: "tb_m_type_machine", key: "id" },
      },
      release_year: {
        type: Sequelize.INTEGER,
      },
      division_id: {
        type: Sequelize.INTEGER,
        references: { model: "tb_m_division", key: "id" },
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: { model: "tb_m_department", key: "id" },
      },
      line_id: {
        type: Sequelize.INTEGER,
        references: { model: "tb_m_line", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tb_m_machine");
  },
};
