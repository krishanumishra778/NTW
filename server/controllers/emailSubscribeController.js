const emailsubscribe = require("../models/emailsubscribe");

exports.emailSubscribeController = async (req, res) => {
  try {
    const { email } = req.body;
    const userexist = await emailsubscribe.find({ email });
    if (!userexist) {
      res.status(201).send({
        success: true,
        message: "you are already subscribe",
      });
    } else {
      await emailsubscribe.create({ email });
      res.status(200).send({ success: true, message: "thanks for subscribe" });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in submit",
    });
  }
};
