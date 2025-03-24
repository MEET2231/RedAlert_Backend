const mysql = require("mysql2");
require("dotenv").config();
// const fs = require('fs');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  ssl: {
    rejectUnauthorized: true,
  }
});

module.exports = pool.promise();
