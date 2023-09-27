/** @format */

const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  pwd: String,
  email_varified: Boolean,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
