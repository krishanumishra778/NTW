const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MYPASSWORD,
    },
  });
  console.log(options.email,options.message)

  var mailOptions = {
    from: process.env.EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  transporter.sendMail(mailOptions, async function (error, info) {
    console.log(info);
  });
};

module.exports = sendEmail