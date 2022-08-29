import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.mjs";
import jwt from "jsonwebtoken";

const Router = express.Router();

const SECRET_KEY =
  "84092ufkhasdfy93274fjagjfhadf968d687tug43jh5gkfsd686s7dfsdgfhsdjf";

// GET
Router.get(["/", "/login"], (req, res) => {
  res.render("login");
});

Router.post("/login", async (req, res) => {
    const { body } = req;
    const { email, password } = body;
  
    const user = await UserModel.findOne({ email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (isPasswordValid) {
      const token = jwt.sign({ id: user._id }, SECRET_KEY, {
        expiresIn: 3600,
        algorithm: "HS512",
      });
      if (user.userType == "Admin") {
        res.redirect("/admin");
      } else {
        res.redirect("/shoppingList");
      }
    } else {
      res.status(401).json({ message: "email and password are not matching." });
    }
  });

export default Router;