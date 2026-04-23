require('dotenv').config();

const { Pool } = require('pg');

console.log('DB URL:', process.env.DB_URL);

const pool = new Pool({
  connectionString: process.env.DB_URL
});

module.exports = pool;