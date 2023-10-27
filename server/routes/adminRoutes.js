/** @format */

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateUserRole,
} = require("../controllers/admincontroller");
const isAdmin = require("../middleware/isAdmin");
const isAuthenticateduser = require("../middleware/isAuthenticate");

const adminroutes = require("express").Router();

// get all users
adminroutes
  .route("/admin/users")
  .get(isAuthenticateduser, isAdmin("admin"), getAllUsers);

// get single user
adminroutes
  .route("/admin/user/:id")
  .get(isAuthenticateduser, isAdmin("admin"), getSingleUser)
  .put(isAuthenticateduser, isAdmin("admin"), updateUserRole)
  .delete(isAuthenticateduser, isAdmin("admin"), deleteUser);

module.exports = adminroutes;
