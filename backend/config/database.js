// backend/config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myapp", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
