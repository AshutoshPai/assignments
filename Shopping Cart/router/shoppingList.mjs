import express from "express";
import { ShoppingListModel } from "../models/shoppingList.mjs";

const Router = express.Router();

// GET
Router.get(["/", "/shoppingList"], async (req, res) => {
    const shoppingLists = await ShoppingListModel.find();
    res.render("shoppingList", { lists: shoppingLists });
})

export default Router;