const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_DB_HOST,
  port: process.env.POSTGRES_DB_PORT,
  database: process.env.POSTGRES_DB,
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
