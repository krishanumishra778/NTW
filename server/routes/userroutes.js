/** @format */
const jwt = require("jsonwebtoken");

const {
  userLogInController,
  userSignupController,
  emailvarificationcontroller,
  varifycontroller,
} = require("../controllers/usercontroller");

const router = require("express").Router();

router.post("/register", userSignupController);
router.post("/login", userLogInController);
router.post("/email_varify", emailvarificationcontroller);
router.post("/varify", varifycontroller);

module.exports = router;
