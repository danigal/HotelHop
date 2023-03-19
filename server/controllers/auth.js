import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

/* REGISTER USER */
export const register = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body, // we can use spread operator to get all the fields from the request body
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User created"); // 201 is the status code for created
  } catch (err) {
    next(err);
  }
};

/* LOGGING IN */
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User does not exist. ")); //404 is the status code for not found

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return next(createError(400, "Invalid password. ")); //400 is the status code for bad request

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    // we don't want to send the password to the client
    // we have to use the _doc property to get the actual document from the mongoose object
    //res.status(200).json({ token, details: { ...otherDetails }, isAdmin });

    res
      .cookie("access_token", token, {
        httpOnly: true, // this means that the cookie can only be accessed by the server
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
