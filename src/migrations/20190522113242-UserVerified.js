

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('tm_user', 'verifyToken', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('tm_user', 'isVerified', {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('tm_user', 'verifyToken'),
    queryInterface.removeColumn('tm_user', 'isVerified'),
  ]),
};
