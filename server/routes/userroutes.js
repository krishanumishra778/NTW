/** @format */
const jwt = require("jsonwebtoken");

const {
  userLogInController,
  userSignupController,
  emailvarificationcontroller,
  varifycontroller,
  wrongotpcontroller,
  logout,
  googleLogin,
  forgotPassword,
  resetPassword,
  changePassword,
  sendMessage,
  getUserDetails,
  updateProfile,
  makePayment,
  review,
} = require("../controllers/usercontroller");
const isAuthenticateduser = require("../middleware/isAuthenticate");
const {
  emailSubscribeController,
} = require("../controllers/emailSubscribeController");

const router = require("express").Router();

router.post("/register", userSignupController);
router.post("/login", userLogInController);

router.post("/varify", varifycontroller);
router.post("/wrong-otp", wrongotpcontroller);
// logout user
router.route("/logout").get(logout);
// forgot password
router.route("/forgot/password").post(forgotPassword);
// reset password
router.route("/password/reset/:token").put(resetPassword);
// change password
router.route("/change/password").put(isAuthenticateduser, changePassword);

/////send message on email ////
router.route("/send/message").post(sendMessage);

// get user data
router.route("/me").get(isAuthenticateduser, getUserDetails);

/////  subscription  /////
router.route("/email/subscription").post(emailSubscribeController);

// update user profile
router.route("/update/profile").put(isAuthenticateduser, updateProfile);

/// payment integration
router.route("/create-checkout-session").post(makePayment);

///review and feedback
router.route("/review").post(isAuthenticateduser, review);

module.exports = router;
