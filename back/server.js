const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "otk-map",
});

const getConn = async () => {
  return await pool.getConnection(async (conn) => conn);
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/list", async (req, res) => {
  const conn = await getConn();
  const query = "SELECT * FROM music";
  let [rows, fields] = await conn.query(query, []);
  conn.release();

  res.send(rows);
});

app.listen(3333, () => {
  console.log("server start");
});
