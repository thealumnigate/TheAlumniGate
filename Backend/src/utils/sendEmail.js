import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  //admin mail
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"The Alumni Gate" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email not sent:", error);
    throw error;
  }
};

export default sendEmail;