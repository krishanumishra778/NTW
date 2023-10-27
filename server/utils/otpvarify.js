const bcrypt = require("bcrypt");

const otpsend = async (otp, email, res) => {
  try {
    let otphash = await bcrypt.hash(otp.toString(), 10);
    console.log(otphash);

    const options = {
      expires: new Date(Date.now() + process.env.COOKIES_OTP_EXP * 60 * 1000),
      httpOnly: true,
    };
    await res.cookie("data", { otphash, email }, options);
    await res.status(200).send({
      success: true,
      message: `otp send to your email ${email} for verification`,
      otp,
      email,
    });
  } catch (error) {
    res.status(500).send({ message: "error in send in otp" });
  }
};

module.exports = otpsend;
