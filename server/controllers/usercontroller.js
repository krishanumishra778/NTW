/** @format */
const nodemailer = require("nodemailer");
const hash = require("bcrypt");
const user = require("../models/user_signup");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//user sign up controller

const userSignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isEmail = await user.findOne({ email: email });
    if (isEmail) {
      res.status(409).send({ success: false, message: "User Already Exists" });
    } else {
      const User = new user({
        name: name,
        email: email,
        password: password,
      });

      const otp = Math.floor(Math.random() * 9999) + 1000;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.MYPASSWORD,
        },
      });

      var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Next Tech Waves",
        text: `Sign up success and variy your email with ${otp}`,
      };
      transporter.sendMail(mailOptions, async function (error, info) {
        if (error) {
          res.send({ error });
        } else {
          const data = await User.save();

          res.status(200).send({
            data,
            otp,
            success: true,
            message: "registration successfull",
          });
          console.log("Email sent: " + info.response);
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

//user log in controller

const userLogInController = async (req, res) => {
  const { email, password } = req.body;
  const isEmail = await user.findOne({ email: email });

  if (isEmail) {
    hash.compare(password, isEmail.password, function (err, result) {
      if (err) {
<<<<<<< Updated upstream
        res.send({ status: false, message: "Invalid Email or Password" });
      }
      if (result) {
        const token = jwt.sign({ id: isEmail._id }, process.env.SECRET_KEY);
        res.send({
          status: true,
          message: "login success",
          token: token,
          user: isEmail,
        });
      } else {
        res.send({ status: false, message: "Invalid Email Or Password" });
      }
    });
  } else {
    res.send({ status: false, message: "Invalid Email Or Password" });
=======
        res.send({ success: false, message: "Invalid user" });
      }
      if (result) {
        res.send({ success: true, message: "login success" });
      } else {
        res.send({ success: false, message: "Invalid user" });
      }
    });
  } else {
    res.send({ success: false, message: "Invalid user" });
>>>>>>> Stashed changes
  }
};

// email varify conrtoller

const varifycontroller = async (req, res) => {
  const id = await user.findOne({ _id: req.body.data._id });
  if (id) {
    const update = await user.findByIdAndUpdate(
      { _id: id._id },
      { email_varified: true }
    );
    if (update) {
      res.send({ success: true, message: "varification success" });
    }
  } else {
    res.send({ success: false, message: "user not found!" });
  }
};

// wrong otp controller
const wrongotpcontroller = async (req, res) => {
  const dltData = await user.findByIdAndDelete({ _id: req.body._id });
  if (dltData) {
    res.send({
      success: true,
      message: "you entered wrong otp please signup again",
    });
  }
};

module.exports = {
  userSignupController,
  userLogInController,
  varifycontroller,
  wrongotpcontroller,
};
