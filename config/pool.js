const { Pool } = require("pg");
require("dotenv").config({ path: "./.env" });

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORTDB || 5432,
  allowExitOnIdle: true,
});

module.exports = pool