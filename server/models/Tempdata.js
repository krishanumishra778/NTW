const mongoose  = require("mongoose");

const tempdata = new mongoose.model("tempdata", {
  userEmail: String,
  otp: Number,
});

module.exports = tempdata;
