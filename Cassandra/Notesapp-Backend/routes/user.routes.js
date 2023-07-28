const express = require("express");
const { UserModel } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const userRouter = express.Router();
const secretKey = process.env.ACCESS_TOKEN_SECRET;

userRouter.get("/", (req, res) => {
  res.send("All the user");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send({
      message: "Please provide all required fields (name, email, password).",
      status: 0,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();
    res.send({
      message: "User created",
      status: 1,
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).send({
      message: "Error during user registration",
      error: error.message,
      status: 0,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const option = {
    expiresIn: "15m",
  };

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User does not exist",
        status: 0,
      });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Something went wrong: " + err,
          status: 0,
        });
      }

      if (!result) {
        return res.status(401).json({
          message: "Incorrect password",
          status: 0,
        });
      }

      const token = jwt.sign({ userId: user._id }, secretKey, option);
      return res.status(200).json({
        message: "User logged in successfully",
        token: token,
        status: 1,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong: " + error.message,
      status: 0,
    });
  }
});
module.exports = { userRouter };
