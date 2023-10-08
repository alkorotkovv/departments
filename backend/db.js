const { Client } = require("pg");

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "12345678",
  port: 5433,
});

db.connect();

module.exports = db;