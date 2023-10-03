/** @format */
const nodemailer = require("nodemailer");
const hash = require("bcrypt");
const user = require("../models/user_signup");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//user sign up controller

const userSignupController = async (req, res) => {
  try {
    const { name, email, pwd, email_varified } = req.body;
    const isEmail = await user.findOne({ email: email });
    if (isEmail) {
      res.send({ status: false, message: "Email Already Exists" });
    } else {
      const hashPassword = hash.hashSync(pwd, 10);
      const User = new user({
        name: name,
        email: email,
        pwd: hashPassword,
        email_varified: email_varified,
      });
      const data = await User.save();
      if (data) {
        const otp = Math.floor(Math.random() * 9999) + 1000;
        res.json({
          status: true,
          message: "Signup success please varify your email",
          otp: otp,
          data: data,
        });

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

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.send({ error });
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error });
  }
};

//user log in controller

const userLogInController = async (req, res) => {
  const { email, pwd } = req.body;
  const isEmail = await user.findOne({ email: email });

  if (isEmail) {
    hash.compare(pwd, isEmail.pwd, function (err, result) {
      if (err) {
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
      res.send({ status: true, message: "varification success" });
    }
  } else {
    res.send({ status: false, message: "user not found!" });
  }
};

// wrong otp controller
const wrongotpcontroller = async (req, res) => {
  const dltData = await user.findByIdAndDelete({ _id: req.body._id });
  if (dltData) {
    res.send({
      status: true,
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
