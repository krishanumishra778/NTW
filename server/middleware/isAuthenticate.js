/** @format */

const jwt = require("jsonwebtoken");
const user = require("../models/user_signup");

const isAuthenticateduser = async (req, res, next) => {
  try {
    
    const { token } = req.cookies;

    if (token) {
      const decodedata = jwt.verify(token, process.env.SECRET_KEY);
      if (decodedata) {
        req.user = await user.findById(decodedata.id);
        // console.log(req.user)
        next();
      } else {
        res
          .status(401)
          .send({ success: false, message: "user is not authenticated" });
      }
    } else {
      res
        .status(401)
        .send({ success: false, message: "user is not authenticated" });
    }
  } catch (error) {
    res.status(401).send({ success: false, message: "Login Required.." });
  }
};

module.exports = isAuthenticateduser;
