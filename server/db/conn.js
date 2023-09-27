/** @format */

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/next-tech-waves")
  .then(() => console.log("Connected!"))
  .catch(e => {
    console.log("No connection");
  });
