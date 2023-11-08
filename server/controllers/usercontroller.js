/** @format */
const nodemailer = require("nodemailer");
const hash = require("bcrypt");
const user = require("../models/user_signup");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const tempdata = require("../models/Tempdata");
const otpsend = require("../utils/otpvarify");
const reviewmodel = require("../models/reviewModel");
const stripe = require("stripe")(
  "sk_test_51O64xKSIWvRI9Ne71LKP5Rq8BMpdxiaVmW3gCU635fudp0WHxtMajRMWcxkyzs8BeB1OdpYmsaxMZdT5Sg1CJzGj00ddIlf1K3"
);
require("dotenv").config();

//user log in controller

const userLogInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email: email }).select("+password");
    console.log(foundUser);

    if (foundUser) {
      if (foundUser.email_verified) {
        const passwordMatch = await hash.compare(password, foundUser.password);

        if (!passwordMatch) {
          return res
            .status(401)
            .json({ success: false, message: "Invalid Email or Password" });
        }
        sendToken(foundUser, 200, res);
      } else {
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
            let otphash = await hash.hash(otp.toString(), 10);
            console.log(otphash);

            const options = {
              expires: new Date(
                Date.now() + process.env.COOKIES_OTP_EXP * 60 * 1000
              ),
              httpOnly: true,
            };
            await res.cookie("data", { otphash, email }, options);
            let email_verified = foundUser.email_verified;
            await res.status(200).send({
              success: false,
              email_verified,
              message: `otp send to your email ${email} for verification`,
            });
            console.log("Email sent: " + info.response);
          }
        });
      }
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

          otpsend(otp, email, res);
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
  // geting data from the cookies
  const { data } = req.cookies;
  let genotp = data?.otphash;
  let email = data?.email;
  // geting otp
  const { otp } = req.body;

  try {
    const temporaryData = await user.findOne({ email });

    if (!temporaryData) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    } else {
      // compare the otp
      const verify = await hash.compare(otp, genotp);
      if (verify) {
        await user.findByIdAndUpdate(temporaryData._id, {
          email_verified: true,
        });
        res.cookie("data", null, {
          expires: new Date(Date.now()),
          httpOnly: true,
        });
        res
          .status(200)
          .json({ success: true, message: "Verification success" });
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
    const email = req.body.email.email;
    let User = await user.findOne({ email });
    if (!User) {
      res
        .status(401)
        .send({ success: false, message: "user does not exist.." });
    } else {
      let restToken = User.getRestPasswordToken();
      await User.save();
      const resetPasswordUrl = `http://localhost:5173/password/reset/${restToken}`;
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
    const token = req.params.token;
    const password = req.body.inpData.new_password;
    const resetPasswordToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");
    const User = await user.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!User) {
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
    res.send({
      success: false,
      message: "can not reset password this time...",
    });
  }
};

///  change password
const changePassword = async (req, res) => {
  console.log("ok");
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
    const senderMessage = `\n Name:-${name}, \n Email:-${email}, \n Contact-Number;-${contactnumber}, \n Message:-${message}`;
    sendEmail({
      email: process.env.EMAIL,
      message: senderMessage,
      subject: "For Inquire from Next Tech Waves",
    });

    res
      .status(200)
      .send({ success: true, message: "thanks for contact next tech waves" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: "can not send message right now" });
  }
};
// get data

const getUserDetails = async (req, res) => {
  const User = await user.findById(req.user._id);

  res.status(200).json({
    success: true,
    user: User,
  });
};

// update profile

const updateProfile = async (req, res) => {
  try {
    const { name, company } = req.body;
    const User = await user.findByIdAndUpdate(
      req.user._id,
      { name, company },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      user: User,
      message: "Profile updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in updating data",
      error: error.message,
    });
  }
};

// upload image controller
const imageController = async (req, res) => {
  try {
    const profile = req.file.filename
    const User = await user.findByIdAndUpdate(req.user._id, { profile: profile })
    res.send({ success: true, message: "profile added" })

  } catch (error) {
    res.send({ sucess: false, message: "error in image uploading" })
    console.log(error)

  }
}

////make payments

const makePayment = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "website",
            },
            unit_amount: 14999 * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    await user.findByIdAndUpdate(req.body.id, { paymentId: "1234" });
    res.json({ success: true, id: session.id, session });
  } catch (error) {
    res.send({ success: false, message: `${error.message}` });
  }
};

///review and feedback controller
const review = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const getReview = await reviewmodel.findOne({ userId: req.user._id });
    if (getReview) {
      await reviewmodel.findByIdAndUpdate(getReview, {
        rating: rating,
        comment: comment,
      });
      res.send({
        success: true,
        message: `Thanks ${req.user.name} for submitting review`,
      });
    } else {
      const Review = new reviewmodel({
        name: req.user.name,
        userId: req.user._id,
        rating: rating,
        comment: comment,
      });
      await Review.save();
      res.send({
        success: true,
        message: `Thanks ${req.user.name} for submitting review`,
      });
    }
  } catch (error) {
    res.status(401).send({ success: false, message: `${error.message}` });
  }
};

//subscribe controller
const subscribeController = async (req, res) => {
  try {
    const { plan, days } = req.body;
    const { id } = req.params;

    const currentDate = new Date();
    const expMonthDate = new Date(
      currentDate.getTime() + `${days}` * 24 * 60 * 60 * 1000
    );
    const planExpDate = new Date(
      currentDate.getTime() + 240 * 24 * 60 * 60 * 1000
    );

    const User = await user.findById(id);
    if (User) {
      const updated = await user.findByIdAndUpdate(
        id,
        {
          $set: {
            "subscription.planStatus": true,
            "subscription.payment": true,
            "subscription.buyingSubscriptionDate": currentDate.toLocaleString(),
            "subscription.expMonthDate": expMonthDate.toLocaleString(),
            "subscription.planExpDate": planExpDate.toLocaleString(),
            "subscription.planThatActive": plan,
            "subscription.continue": true,
          },
        },
        { new: true }
      );

      res.send({ success: true, message: "subscription success", updated });
    } else {
      res.send({ success: false, message: "user not found" });
    }
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: `${error.message}` });
  }
};

//pause plan controller
const pausePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { days } = req.body;

    const User = await user.findById(id);
    if (User) {
      const currentDate = new Date();
      const buyingSubscriptionDate = User.subscription.buyingSubscriptionDate;
      const timeDifference = currentDate - buyingSubscriptionDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const daysRemain = days - daysDifference;
      User.subscription.daysRemain = daysRemain;
      User.subscription.planStatus = false;
      User.subscription.continue = false;
      await User.save();
      res.send({ success: true, message: "plan paused" });
    } else {
      res.send({ success: false, message: "user not found" });
    }
  } catch (error) {
    res.send({ success: false, message: `${error.message}` });
    console.log(error);
  }
};

// play plan controller
const playPlan = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await user.findById(id);
    if (User) {
      const currentDate = new Date();
      const daysRemain = User.subscription.daysRemain;
      const expMonthDate = new Date(
        currentDate.getTime() + `${daysRemain}` * 24 * 60 * 60 * 1000
      );
      const planExpDate = new Date(User.subscription.planExpDate);
      // console.log(planExpDate);
      console.log(expMonthDate);
      console.log(currentDate);
      console.log(currentDate.getTime() > expMonthDate.getTime());
      if (currentDate.getTime() <= planExpDate.getTime()) {
        if (currentDate.getTime() < expMonthDate.getTime()) {
          User.subscription.planStatus = true;
          User.subscription.expMonthDate = expMonthDate;
          await User.save();
          res.send({ success: true, message: "plan playing" });
        } else {
          res.send({ success: false, message: "your plan expired" });
        }
      } else {
        res.send({ success: false, message: "your plan expired" });
      }
    } else {
      res.send({ success: false, message: `user not found` });
    }
  } catch (error) {
    res.send({ success: false, message: `${error.message}` });
    console.log(error);
  }
};

// plan details controller
const planDetails = async (req, res) => {
  const { id } = req.params;
  const User = await user.findById(id);
  if (!User) {
    return res.send({ success: false, message: "user not found" });
  }

  res.send({ success: true, details: User.subscription });
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
  updateProfile,
  makePayment,
  review,
  subscribeController,
  pausePlan,
  playPlan,
  planDetails,
  imageController
};
