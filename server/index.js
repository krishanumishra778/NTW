/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/userroutes.js");


require("dotenv").config();
const db=require("./db/conn.js");






app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (rew, res) => {
  res.send("home page called");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(
    `server is running on http://localhost:${process.env.PORT} port`
  );
});
