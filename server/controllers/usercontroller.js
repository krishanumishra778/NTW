/** @format */
const nodemailer = require("nodemailer");
const hash = require("bcrypt");
const user = require("../models/user_signup");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const tempdata = require("../models/Tempdata");
require("dotenv").config();

//user log in controller

const userLogInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email: email }).select("+password");

    if (foundUser) {
      const passwordMatch = await hash.compare(password, foundUser.password);

      if (!passwordMatch) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid Email or Password" });
      }
      sendToken(foundUser, 200, res);
    } else {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: `Error in login ${error.message}` });
  }
};

//user sign up controller

const userSignupController = async (req, res) => {
  try {
    const { name, email, password, company, country, email_verified } =
      req.body;
    const isEmail = await user.findOne({ email: email });

    if (isEmail) {
      res.send({ success: false, message: "User Already Exists" });
    } else {
      const User = new user({
        name: name,
        email: email,
        password: password,
        company: company,
        country: country,
        email_verified: email_verified,
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
          console.log(error);
        } else {
          const data = await User.save();
          const temporaryData = new tempdata({
            userEmail: email,
            otp: otp,
          });
          await temporaryData.save();
          res.status(200).send({
            success: true,
            message: `otp send to your email ${email} for verification`,
            otp,
            email,
          });

          console.log("Email sent: " + info.response);
        }
      });
    }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
// email varify conrtoller

const varifycontroller = async (req, res) => {
  const { otp } = req.body;

  try {
    const temporaryData = await tempdata.findOne({ otp: otp });
    if (!temporaryData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    } else {
      if (temporaryData.otp === Number(otp)) {
        const userToVerify = await user.findOne({
          email: temporaryData.userEmail,
        });
        if (!userToVerify) {
          return res
            .status(404)
            .json({ success: false, message: "User not found" });
        } else {
          await user.findByIdAndUpdate(userToVerify._id, {
            email_verified: true,
          });
          await tempdata.findOneAndDelete({
            userEmail: temporaryData.userEmail,
          });

          res
            .status(200)
            .json({ success: true, message: "Verification success" });
        }
      } else {
        res.status(400).json({ success: false, message: "Wrong OTP" });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
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

///forgot password
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    let User = await user.findOne({ email });
    if (!User) {
      res
        .status(401)
        .send({ success: false, message: "user does not exist.." });
    } else {
      let restToken = User.getRestPasswordToken();
      await User.save();
      const resetPasswordUrl = `${req.protocol}://localhost:5173/password/reset/${restToken}`;
      const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\n if you have not requested this email
      then, please ignore it  `;

      try {
        sendEmail({
          email: User.email,
          message,
          subject: "Next Tech Waves Password Recovery",
        });
        res.status(200).send({
          success: true,
          message: "Reset link send to your account...",
        });
      } catch (error) {
        User.resetPasswordToken = undefined;
        User.resetPasswordExpire = undefined;
        await User.save();
        res
          .status(401)
          .send({ success: false, message: "error in sending mail" });
      }
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "can not reset password this time..." });
  }
};

///reset password
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password, confirmpassword } = req.body;

    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const User = await user.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      res.status(401).send({ success: false, message: "link expired" });
    } else {
      User.password = password;
      User.resetPasswordToken = undefined;
      User.resetPasswordExpire = undefined;
      await User.save();
      res
        .status(201)
        .send({ success: true, message: "password change Successfully" });
    }
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "can not reset password this time..." });
  }
};

///  change password
const changePassword = async (req, res) => {
  try {
    const { oldpassword, newpassword, conformpassword } = req.body;
    if (newpassword == conformpassword) {
      const foundData = await user
        .findById({ _id: req.user.id })
        .select("+password");

      const comparePassword = await foundData.comparePassword(oldpassword);

      if (comparePassword) {
        foundData.password = newpassword;
        await foundData.save();

        res.send({ success: true, message: "password changed" });
      } else {
        res.send({ success: false, message: "your old password is incorrect" });
      }
    } else {
      res.send({
        success: false,
        message: "new password and conform password is not matching",
      });
    }
  } catch (error) {
    res.status(401).send({
      success: false,
      message: `error in change password ${error.message}`,
    });
  }
};

////send message on mail
const sendMessage = (req, res) => {
  try {
    const { name, email, contactnumber, message } = req.body;
    const senderMessage = `Name:-${name},Email:-${email},Contact-Number;-${contactnumber},Message:-${message}`;
    sendEmail({
      email: process.env.EMAIL,
      message: senderMessage,
      subject: "For Inquire from Next Tech Waves",
    });

    res.status(200).send({ success: true, message: "thanks for contact next tech waves" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "can not send message right now" });
  }
};
// get data

const getUserDetails = async (req, res) => {
  console.log(req.user)
  const User = await user.findById(req.user._id);

  res.status(200).json({
    success: true,
    user : User,
  });
};

module.exports = {
  userSignupController,
  userLogInController,
  varifycontroller,
  wrongotpcontroller,
  logout,
  forgotPassword,
  resetPassword,
  changePassword,
  sendMessage,
  getUserDetails,
};
