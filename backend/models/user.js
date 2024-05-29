// backend/models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  gender: { type: DataTypes.ENUM("Male", "Female", "Other"), allowNull: false },
  dateOfBirth: { type: DataTypes.DATE, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  profileImageUrl: { type: DataTypes.STRING },
});

module.exports = User;
