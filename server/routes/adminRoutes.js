/** @format */

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateUserRole,
  getEmailSubscriber,
} = require("../controllers/admincontroller");
const isAdmin = require("../middleware/isAdmin");
const isAuthenticateduser = require("../middleware/isAuthenticate");

const adminroutes = require("express").Router();

// get all users
adminroutes
  .route("/admin/users")
  .get( getAllUsers);

// get single user
adminroutes
  .route("/admin/user/:id")
  .get(isAuthenticateduser, isAdmin("admin"), getSingleUser)
  .put(isAuthenticateduser, isAdmin("admin"), updateUserRole)
  .delete(isAuthenticateduser, isAdmin("admin"), deleteUser);


  //get email subscriber
  adminroutes.route('/email/subscriber').get(isAuthenticateduser,isAdmin('admin'),getEmailSubscriber)

module.exports = adminroutes;
