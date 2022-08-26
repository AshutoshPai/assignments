import express from "express";
import fs from "fs";
const Router = express.Router();

const filepath = "./JsonData/empDetails.json";

Router.get("/", async (req, res) => {
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error.");
            return false;
        }
        res.setHeader("content-type", "application/json");
        res.send(data);
    });
});
Router.get("/:id", async (req, res) => {
    const id = req.params.id;
    fs.readFile(filepath, (err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error.");
            return false;
        }
        res.setHeader("content-type", "application/json");
        let employeeData = JSON.parse(data);
        employeeData.forEach((employee) => {
            if (employee.empId == id) {
                res.setHeader("content-type", "application/json");
                res.send(employee); 
                return false
            }
        })
    });
});

export default Router;