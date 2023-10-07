const mongoose = require("mongoose");
const validator = require("validator");

const emailSubscribe = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please enter your email.."],
      validate: [validator.isEmail, "please enter valid email"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("emailsubscribe", emailSubscribe);
