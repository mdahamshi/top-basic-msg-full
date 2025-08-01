import pool from './pools.js';

export async function getAllmessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

export async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}
