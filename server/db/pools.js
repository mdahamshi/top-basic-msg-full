const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: 'postgres', 
  port: process.env.POSTGRES_DB_PORT,
  database: process.env.POSTGRES_DB,
});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
