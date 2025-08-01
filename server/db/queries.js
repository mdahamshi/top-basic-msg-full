import pool from './pools.js';

export async function getAllmessages() {
  const { rows } = await pool.query(
    'SELECT * FROM messages ORDER BY messages.added DESC'
  );
  return rows;
}

export async function insertmessagename(message) {
  await pool.query('INSERT INTO messages (name, text)  VALUES ($1,$2)', [
    message.name,
    message.text,
  ]);
}

export async function deletMessage(message) {
  const result = await pool.query('DELETE FROM messages WHERE id = $1', [
    message.id,
  ]);
}

export async function updateMessage(message) {
  await pool.query(
    'UPDATE messages SET name = $1, text = $2 WHERE id = $3 RETURNING *',
    [message.name, message.text, message.id]
  );
}
