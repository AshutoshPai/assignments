import express from "express";
import axios from "axios";

const Router = express.Router();

Router.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
        let employeeDetails = []

        response.data.forEach((emp) => {
            employeeDetails.push({
                "Name": emp.name,
                "Id": emp.id,
                "Created At": emp.createdAt
            });
        });
        res.send(employeeDetails);
    } catch (error) {
        res.status(500).send("Internal server error.");
    }
});

export default Router;