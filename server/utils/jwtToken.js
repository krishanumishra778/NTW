const jwt = require("jsonwebtoken");
const sendToken = async (user, statusCode, res) => {
  // Create a deep clone of the user object and exclude the 'password' property
  const userWithoutPassword = JSON.parse(JSON.stringify(user));
  delete userWithoutPassword.password;

  const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_TIME,
  });

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIES_EXP * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    message: "Login Successfully...",
    user: userWithoutPassword,
    token,
  });
};

module.exports = sendToken;
