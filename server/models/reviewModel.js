/** @format */

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "user", require: true },
  name: { type: String, require: true },
  rating: { type: Number, require: true },
  comment: { type: String, require: true },
});

const reviewmodel = mongoose.model("reviews", schema);
module.exports = reviewmodel;
