/** @format */

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto"); //built in module

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your name.."],
      maxLenght: [30, "Name can not exist 30 "],
      minLenght: [2, "Name should have more then 2 "],
    },
    email: {
      type: String,
      required: [true, "please enter your email.."],
      validate: [validator.isEmail, "please enter valid email"],
    },
    company: {
      type: String,
    },
    country: {
      type: String,
    },
    password: {
      type: String,
      minLenght: [8, "Name should have more then 8 charecter"],
      select: false,
    },

    role: {
      type: String,
      default: "user",
    },
    email_verified: {
      type: String,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

///// bcrypt password method /////
userSchema.pre("save", async function (next) {
  let user = this;
  if (!user.isModified("password")) {
    next();
  }

  user.password = await bcrypt.hash(user.password, 10);
});

/////bcrypted compare  password   method   //////

userSchema.methods.comparePassword = async function (enterdPassword) {
  console.log(enterdPassword);
  return await bcrypt.compare(enterdPassword, this.password);
};

// generating password rest token

userSchema.methods.getRestPasswordToken = function () {
  // generating token
  const restToken = crypto.randomBytes(20).toString("hex");

  // hashing and adding restPasswordToken to userSchema

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(restToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return restToken;
};

const user = mongoose.model("user", userSchema);
module.exports = user;
