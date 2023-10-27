/** @format */

const user = require("../models/user_signup");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    res.send({ success: true, message: "all users fetched", users: allUsers });
  } catch (error) {
    res.status(401).send({ success: false, message: `${error.message}` });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await user.findById({ _id: id });
    res.send({ success: true, message: " user fetched", user: singleUser });
  } catch (error) {
    res.status(401).send({ success: false, message: `Invalid User Id` });
  }
};

const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    const updatedUser = await user.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );

    res.send({
      success: true,
      message: " user role changed",
      user: updatedUser,
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: `error in user role change ${error.message}`,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    res.send({ success: true, message: " user deleted" });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: `error in delete user ${error.message}`,
    });
  }
};

module.exports = { getAllUsers, getSingleUser, updateUserRole, deleteUser };
