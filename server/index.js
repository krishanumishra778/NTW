/** @format */

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/userroutes.js");

const cookieParser = require("cookie-parser");
require("dotenv").config();
const db = require("./db/conn.js");


app.use(cookieParser());

app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`, // Update this to match your frontend URL
    credentials: true,
  })
);
app.use(express.json());
app.use(router);

app.get("/", (rew, res) => {
  res.send("home page called");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running on http://localhost:${process.env.PORT} port`);
});
