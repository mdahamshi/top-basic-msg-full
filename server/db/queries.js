import pool from './pools.js';

export async function getAllmessages() {
  const { rows } = await pool.query(
    'SELECT * FROM messages ORDER BY messages.editable ASC,  messages.added DESC'
  );
  return rows;
}

export async function insertmessagename(message) {
  const res = await pool.query(
    'INSERT INTO messages (name, text)  VALUES ($1,$2) RETURNING *',
    [message.name, message.text]
  );
  return res.rows[0];
}

export async function deletMessage(message) {
  await pool.query('DELETE FROM messages WHERE id = $1', [message.id]);
}

export async function updateMessage(message) {
  await pool.query(
    'UPDATE messages SET name = $1, text = $2 WHERE id = $3 RETURNING *',
    [message.name, message.text, message.id]
  );
}
