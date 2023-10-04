const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
    password: {
      type: String,
      required: [true, "please enter your password.."],
      minLenght: [8, "Name should have more then 8 charecter"],
      select: false,
    },

    role: {
      type: String,
      default: "user",
    },
    is_email_varified: {
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
  console.log(enterdPassword)
  return await bcrypt.compare(enterdPassword, this.password);
};

const user = mongoose.model("user", userSchema);
module.exports = user;
