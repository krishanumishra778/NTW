/** @format */
const jwt = require("jsonwebtoken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "" + file.originalname);
  },
});

const upload = multer({ storage: storage });

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
  subscribeController,
  pausePlan,
  playPlan,
  planDetails,
  uploadImage,
  removeImage,
  getReviews,
} = require("../controllers/usercontroller");
const isAuthenticateduser = require("../middleware/isAuthenticate");
const {
  emailSubscribeController,
} = require("../controllers/emailSubscribeController");
const isAdmin = require("../middleware/isAdmin");

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

// upload image
router
  .route("/upload/image")
  .post(isAuthenticateduser, upload.single("file"), uploadImage);

//remove image
router.route("/remove/image").put(isAuthenticateduser, removeImage);

/// payment integration
router.route("/create-checkout-session").post(isAuthenticateduser, makePayment);

///review and feedback
router.route("/review").post(isAuthenticateduser, review);

///get reviews and feedback
router.route("/get/review").get(isAuthenticateduser,isAdmin("admin"), getReviews);

//update user model when subscribe
router.route("/subscribe/:id").post(isAuthenticateduser, subscribeController);

// pause subscribe plan api
router.route("/pause/plan/:id").post(isAuthenticateduser, pausePlan);

// play plan
router.route("/play/plan/:id").post(isAuthenticateduser, playPlan);

//plan details
router.route("/plan/details/:id").get(isAuthenticateduser, planDetails);

module.exports = router;
