const { Pool } = require('pg');
require('dotenv').config();
console.log(`connecting to ${process.env.POSTGRES_DB_URL}`);
const pool = new Pool({
  connectionString: process.env.POSTGRES_DB_URL

});
module.exports = {
  query: (text, params) => pool.query(text, params),
};
