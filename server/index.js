/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/userroutes.js");

const cookieParser = require("cookie-parser");
require("dotenv").config();
const db = require("./db/conn.js");
const adminroutes = require("./routes/adminroutes.js");

app.use(cookieParser());

app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`,
    credentials: true,

  })
);
app.use(express.json());
app.use(router);
app.use(adminroutes);
app.use('/public', express.static('public'))

app.get("/", (rew, res) => {
  res.send("home page called");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running on http://localhost:${process.env.PORT} port`);
});
