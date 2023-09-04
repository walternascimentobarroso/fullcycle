const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const { faker } = require('@faker-js/faker');


const port = 3000;

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
};

let connection;

async function createConnection() {
  if (connection) return;
  connection = await mysql.createConnection(config);

  const createTableSQL = `CREATE TABLE IF NOT EXISTS people (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL
    );`;

  await connection.execute(createTableSQL);
}

async function insertOnDatabase(name) {
  await createConnection();
  await connection.execute(`INSERT INTO people (name) VALUES ('${name}')`);
}

async function getAllPeople() {
  await createConnection();
  const [rows] = await connection.execute("SELECT * FROM people");
  return rows;
}

app.get("/", async (req, res) => {
  const name = faker.internet.userName();
  await insertOnDatabase(name);

  const people = await getAllPeople();
  let htmlListPeople = "";
  people.forEach(
    (person) => (htmlListPeople = htmlListPeople + `<li>${person.name}</li>`)
  );

  res.send(`<h1>Full Cycle Rocks!</h1>
  <ul>${htmlListPeople}</ul>`);
});

app.listen(port, () => {
  console.log("Listings " + port);
});
