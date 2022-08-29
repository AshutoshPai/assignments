import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/users.mjs";
import { ShoppingListModel } from "../models/shoppingList.mjs";

const Router = express.Router();

Router.get("/", async (req, res) => {
  const shoppingLists = await ShoppingListModel.find();
  res.render("adminPage", { lists: shoppingLists });
})

Router.get("/addUser", (req, res) => {
  res.render("addUser");
})

Router.post("/addUser", async (req, res) => {
  try {
    const body = req.body;
    const { name, email, password, userType } = body;

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      userType,
    });

    const doc = await newUser.save();

    res.redirect("/admin/userList")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

Router.get("/addProduct", async (req, res) => {
  res.render("addProduct");
})

Router.post("/addProduct", async (req, res) => {
  try {
    const body = req.body;
    const newProduct = new ShoppingListModel(body)
    await newProduct.save()
    res.redirect("/admin")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.");
  }
});

Router.get("/userList", async (req, res) => {
  const users = await UserModel.find();
  res.render("users", { users: users });
})

export default Router;