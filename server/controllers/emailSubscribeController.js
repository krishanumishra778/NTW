const emailsubscribe = require("../models/emailsubscribe");

exports.emailSubscribeController = async (req, res) => {
  try {
    const { email } = req.body;
    const userexist = await emailsubscribe.find({ email: email });
    
    if (userexist.length > 0) {
      res.status(201).send({
        success: false,
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
