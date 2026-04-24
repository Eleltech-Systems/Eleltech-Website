import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
     const { email, password } = req.body;

     if (!email || !password || email === '' || password === '') {
          next(errorHandler(400, "All fields are required"));
     }

     const hashedpassword = bcryptjs.hashSync(password, 10);
     const newuser = new User({ email, password: hashedpassword, })

     try {
          await newuser.save();
          res.status(200).json({ message: "Signup Successful" });
     } catch (error) {
          next(errorHandler(500, "Something went wrong"));
     }
};


export const signin = async (req, res, next) => {
     const { email, password } = req.body;

     if (!email || !password || email === '' || password === '') {
          next(errorHandler(400, 'All fields are required'));
     }

     try {
          const validUser = await User.findOne({ email });
          if (!validUser) {
               return next(errorHandler(404, 'User not found'));
          }
          const validPassword = bcryptjs.compareSync(password, validUser.password);
          if (!validPassword) {
               return next(errorHandler(400, 'Invalid password'));
          }
          const token = jwt.sign({ id: validUser._id, isAdmin: validUser.isAdmin }, process.env.JWT_SECRET);

          const { password: pass, ...rest } = validUser._doc; //This hides the password

          res
               .status(200)
               .cookie('access_token', token, {
                    httpOnly: true,
               })
               .json(rest);
     } catch (error) {
          next(error);
     }
};


export const signout = async (req, res, next) => {
     try {
          res.clearCookie('access_token').status(200).json("User has been signed out");
     } catch (error) {
          next(error)
     }
};