const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('flight_planning', 'flight_user', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uniqueId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    unique: true,
  },
});

sequelize.sync();

module.exports = { sequelize, User };
