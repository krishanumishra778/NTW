/** @format */
const nodemailer = require("nodemailer");
const hash = require("bcrypt");
const user = require("../models/user_signup");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

require("dotenv").config();

//user sign up controller

const userSignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isEmail = await user.findOne({ email: email });
    if (isEmail) {
      res.status(200).send({ success: false, message: "User Already Exists" });
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
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email: email }).select("+password");

    if (foundUser) {
      const passwordMatch = await hash.compare(password, foundUser.password);

      if (!passwordMatch) {
        return res
          .status(200)
          .json({ success: false, message: "Invalid Email or Password" });
      }

      // Assuming you have a function sendToken(User, statusCode, res)
      // that sends a token in response. You should implement it accordingly.
      sendToken(foundUser, 200, res);
    } else {
      return res
        .status(200)
        .json({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error in userLogInController:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
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

// logout user
const logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).send({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: ` error in LogOut user.. ${error.message} `,
    });
  }
};

module.exports = {
  userSignupController,
  userLogInController,
  varifycontroller,
  wrongotpcontroller,
  logout,
};
