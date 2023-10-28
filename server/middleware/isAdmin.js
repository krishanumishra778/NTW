/** @format */

const isAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.send({ success: false, message: "unAuthorized" });
    }
    next();
  };
};

module.exports = isAdmin;
