import express from "express";
import { OrderModel } from "./orderSchema.mjs"

const Router = express.Router();

// GET
Router.get("/admin", async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.render("orders", { orders: orders })
    } catch (error) {
        res.status(500).send("Internal server error.");
    }

});

// GET
Router.get(["/","/addOrder"], (req, res) => {
    res.render("addOrders");
})

Router.get("/successOrder", (req, res) => {
    res.render("successPage");
})

// POST
Router.post("/addOrder", async (request, response) => {
    try {
        const body = request.body;
        body.date = new Date(); 
        const newUser = new OrderModel(body)
        await newUser.save()
        response.redirect("/successOrder")
        
    } catch (error) {
        console.log(error);
        response.status(500).send("Internal server error.");
    }
});

export default Router;