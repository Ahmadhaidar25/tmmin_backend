var bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "tm_user",
      [
        {
          name: "Admin",
          usercode: "admin",
          password: bcrypt.hashSync("admin", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          usercode: "user",
          password: bcrypt.hashSync("user", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("tm_user", null, {}),
};
