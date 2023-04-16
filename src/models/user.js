module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uuid: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ["password"] },
        },
      },
      tableName: "tb_m_user",
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
