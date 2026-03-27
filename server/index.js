import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
     service: "gmail",
     auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
     }
});

// route
app.post("/contact", async (req, res) => {
     try {
          const { name, email, subject, message } = req.body;

          console.log(name, email, subject, message)

          await transporter.sendMail({
               from: process.env.EMAIL_USER,
               replyTo: email, // 👈 important
               to: process.env.EMAIL_USER,
               subject: subject,
               text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          });

          res.status(200).json({ success: true, message: "Email sent" });

     } catch (error) {
          console.error(error);
          res.status(500).json({ success: false, message: "Failed to send email" });
     }
});

console.log("ENV:", process.env.EMAIL_USER);


app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
});