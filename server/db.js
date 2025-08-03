const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  editable BOOLEAN DEFAULT TRUE
);

INSERT INTO messages (name, text, editable) VALUES
('Mohammad', 'Love you too :)', FALSE),
('Sarah', 'I love Dad', FALSE),
('Amina', 'I also love Dad.', FALSE),
('John', 'Hello everyone!', TRUE),
('Lina', 'How are you all doing?', TRUE),
('Omar', 'Nice to meet you!', TRUE);
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
