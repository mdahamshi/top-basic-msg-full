const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  protected BOOLEAN DEFAULT FALSE
);

INSERT INTO messages (name, text, protected) VALUES
('Mohammad', 'Love you too :)', TRUE),
('Sarah', 'I love Dad', TRUE),
('Amina', 'I also love Dad.', TRUE),
('John', 'Hello everyone!', FALSE),
('Lina', 'How are you all doing?', FALSE),
('Omar', 'Nice to meet you!', FALSE);
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
