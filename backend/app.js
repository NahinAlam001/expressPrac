const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const userRoutes = require("./routes/user");

const app = express();

// Database connection details
const sequelize = new Sequelize("myapp", "root", "123nahin", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

app.use(bodyParser.json());

app.use("/api", userRoutes);

// Sync database and start server
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = app;
