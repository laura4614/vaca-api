import pool from "../lib/database.js";

const queries = [
  `CREATE TABLE IF NOT EXISTS Users (
    id SERIAL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
  );`,
  `CREATE TABLE IF NOT EXISTS Groups (
    id SERIAL,
    ownerUserId INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    color VARCHAR(50) NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT fk_groups_users_id FOREIGN KEY(ownerUserId) REFERENCES Users(id)
  );`,
  `INSERT INTO Users (name, email, password, createdAt) VALUES 
    ('miguel', 'miguel@gmail.com', 'password', '2023-01-02'),
    ('juan camilo', 'juancamilo@gmail.com', 'password', '2024-03-14'),
    ('mateo', 'mateo@gmail.com', 'password', '2024-04-18'),
    ('carolina', 'carolina@gmail.com', 'password', '2024-08-22'),
    ('liliana', 'liliana@gmail.com', 'password', '2024-08-22'),
    ('césar', 'cesar@gmail.com', 'password', '2024-09-22'),
    ('hernán', 'hernan@gmail.com', 'password', '2024-12-01');`,
  `INSERT INTO Groups (name, color, ownerUserId, createdAt) VALUES 
    ('Los 4 babies', '#FF5733', 2, '2023-03-14'),
    ('Paseo san andrés', '#FCFF33', 1, '2023-04-14'),
    ('Salida provenza jueves', '#77FF33', 5, '2023-05-14'),
    ('Grupo # 4', '#33FFCE', 3, '2023-06-22'),
    ('Los gatos', '#33C4FF', 7, '2023-07-14'),
    ('Los del sur', '#335EFF', 6, '2023-07-14'),
    ('Grupo # 3', '#7133FF', 1, '2023-01-02'),
    ('Los chompos', '#BE33FF', 2, '2024-03-14'),
    ('Grupo # 1', '#FF33FF', 3, '2024-04-18'),
    ('Grupo # 2', '#FF338D', 4, '2024-08-22');`,
];

async function runMigrations() {
  const client = await pool.connect();
  for (let query of queries) {
    await client.query(query);
  }
  console.log("Migrations ran successfully");
  client.end();
}

runMigrations().catch(console.error);