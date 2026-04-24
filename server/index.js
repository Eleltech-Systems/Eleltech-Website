import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import messageRoutes from './routes/message.route.js'
import authRoutes from './routes/auth.route.js';
import cors from 'cors';


dotenv.config();

const app = express();

// app.use(cors({
//      origin: 'https://www.eleltech.com',
//      methods: ['GET', 'POST', 'PUT', 'DELETE'],
//      credentials: true
// }));

app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGO).then(() => {
     console.log("Connected to MongoDB!");
}).catch((err) => {
     console.log(err);
})

app.listen(5000, () => {
     console.log("Server listening on port 5000!")
});

app.use('/server/message', messageRoutes);
app.use('/server/auth', authRoutes);


app.use((err, req, res, next) => {
     res.status(err.statusCode || 500).json({
          success: false,
          message: err.message || "Internal Server Error",
     });
});





























// middleware
// app.use(cors());

//const PORT = process.env.PORT || 5000;


// const transporter = nodemailer.createTransport({
//      service: "gmail",
//      auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS
//      }
// });

// route
// app.post("/contact", async (req, res) => {
//      try {
//           const { name, email, subject, message } = req.body;

//           console.log(name, email, subject, message)

//           await transporter.sendMail({
//                from: process.env.EMAIL_USER,
//                replyTo: email, // 👈 important
//                to: process.env.EMAIL_USER,
//                subject: subject,
//                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//           });

//           res.status(200).json({ success: true, message: "Email sent" });

//      } catch (error) {
//           console.error(error);
//           res.status(500).json({ success: false, message: "Failed to send email" });
//      }
// });

// console.log("ENV:", process.env.EMAIL_USER);

// app.listen(PORT, () => {
//      console.log(`Server running on port ${PORT}`);
// });