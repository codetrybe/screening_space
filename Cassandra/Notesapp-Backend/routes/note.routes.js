const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel");
require('dotenv').config();

const secretKey = process.env.ACCESS_TOKEN_SECRET;
const noteRouter = express.Router();
noteRouter.use(authenticator);

noteRouter.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Token is missing, please login", status: 2 });
    }

    jwt.verify(token, secretKey, async (err, decodedToken) => {
      if (err) {
        console.error("Error while verifying token:", err);
        return res.status(401).json({ message: "Invalid token, please login again", status: 2 });
      }

      const data = await NoteModel.find({ user: decodedToken.userId });
      res.json({ data: data, message: "Success", status: 1 });
    });
  } catch (error) {
    console.error("Error in noteRouter.get:", error);
    res.status(500).json({ message: error.message, status: 0 });
  }
});

noteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.json({ message: "Note created", status: 1 });
  } catch (error) {
    console.error("Error in noteRouter.post:", error);
    res.status(500).json({ message: error.message, status: 0 });
  }
});

noteRouter.patch("/", async (req, res) => {
  try {
    const { id } = req.headers;
    await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ message: "Note updated", status: 1 });
  } catch (error) {
    console.error("Error in noteRouter.patch:", error);
    res.status(500).json({ message: error.message, status: 0 });
  }
});

noteRouter.delete("/", async (req, res) => {
  try {
    const { id } = req.headers;
    await NoteModel.findByIdAndDelete({ _id: id });
    res.json({ message: "Note deleted", status: 1 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 0 });
  }
});

module.exports = {
  noteRouter,
};