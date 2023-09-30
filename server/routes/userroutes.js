/** @format */
const jwt = require("jsonwebtoken");

const {
  userLogInController,
  userSignupController,
  emailvarificationcontroller,
  varifycontroller,
  wrongotpcontroller,
} = require("../controllers/usercontroller");

const router = require("express").Router();

router.post("/register", userSignupController);
router.post("/login", userLogInController);

router.post("/varify", varifycontroller);
router.post("/wrong-otp", wrongotpcontroller);

module.exports = router;
