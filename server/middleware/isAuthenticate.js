const jwt = require("jsonwebtoken");
const user = require("../models/user_signup");

exports.isAuthenticated = async (res, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      res
        .status(201)
        .send({ success: false, message: "user is not authenticated" });
    }
    const decodedata = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decodedata);
    req.user = await user.findById(decodedata.id);

    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Login Required.." });
  }
};
