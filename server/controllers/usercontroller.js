/** @format */
const nodemailer = require("nodemailer");
const hash = require("bcrypt");
const user = require("../models/user_signup");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSignupController = async (req, res) => {
  try {
    const { name, email, pwd, email_varified } = req.body;
    const isEmail = await user.findOne({ email: email });
    if (isEmail) {
      res.send({ status: "failed", message: "Email Already Exists" });
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
        res.json({ status:true, message: "Signup success please varify your email" });

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
          text: "Sign up success",
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
    res.send({ message: error });
  }
};

const userLogInController = async (req, res) => {
  const { email, pwd } = req.body;
  const isEmail = await user.findOne({ email: email });

  if (isEmail) {
    hash.compare(pwd, isEmail.pwd, function (err, result) {
      if (err) {
        res.send({ status: "failed", message: "Invalid user" });
      }
      if (result) {
        res.send({ status: "success", message: "login success" });
      } else {
        res.send({ status: "failed", message: "Invalid user" });
      }
    });
  } else {
    res.send({ status: "failed", message: "Invalid user" });
  }
};

const emailvarificationcontroller = async (req, res) => {
  const { email } = req.body;
  const getEmail = await user.findOne({ email: email });
  if (getEmail) {
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
      to: getEmail.email,
      subject: "for email varification",
      text: `<h1>${otp}</h1>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send({ error });
      } else {
        res.send({
          status: true,
          message: "please check your email and varify",
          otp: otp,
          id: getEmail._id,
        });
      }
    });
  } else {
    res.send({ status: false, message: "Email Not Found" });
  }
};

const varifycontroller = async (req, res) => {
  const data = await user.findById({ _id: req.body.id });
  if (data) {
    await user.findByIdAndUpdate(
      { _id: req.body.id },
      { email_varified: "true" }
    );
    res.send({status:true, message: "email varification success" });
  } else {
    res.send({status:false, message: "user not found" });
  }
};

module.exports = {
  userSignupController,
  userLogInController,
  emailvarificationcontroller,
  varifycontroller,
};
