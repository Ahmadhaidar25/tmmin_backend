"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tb_m_shop", {
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
      deleted_at: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable("tb_m_shop");
  },
};
