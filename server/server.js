// server/server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer"); // For sending emails

const app = express();
app.use(cors()); // Allow requests from your React app
app.use(express.json());

// Simple API endpoint for a contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email transporter (using a service like Gmail, SendGrid, etc.)
  // IMPORTANT: Use environment variables for your credentials!
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "your-email@example.com", // Your email address
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send message." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
