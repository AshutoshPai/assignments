import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.mjs";

const Router = express.Router();

// GET
Router.get("/", (req, res) => {
  res.render("signUp");
})

Router.post("/", async (req, res) => {
    try {
      const body = req.body;
      const { name, email, password, userType } = body;
  
      const hashedPassword = await bcrypt.hash(password, 5);
  
      const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
        userType: "Normal",
      });
  
      const doc = await newUser.save();
  
      res.json(doc);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error.");
    }
  });

export default Router;