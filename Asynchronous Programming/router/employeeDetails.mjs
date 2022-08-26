import express from "express";
import axios from "axios";
const Router = express.Router();

const filepath = "./JsonData/empDetails.json";

Router.get("/:id", async (req, res) => {
    const employeeId = req.params.id;
    const empResponse = await axios.get("http://localhost:3000/employee/" + employeeId);
    const projectId = empResponse.data.projectId;
    const projectResponse = await axios.get("http://localhost:3000/project/" + projectId);

    var myObject = new Object();
    myObject.firstName = empResponse.data.firstName;
    myObject.lastName = empResponse.data.lastName;
    myObject.empId = empResponse.data.empId;
    myObject.city = empResponse.data.city;
    myObject.projectId = projectResponse.data.projectId;
    myObject.projectName = projectResponse.data.projectName;
    myObject.domain = projectResponse.data.domain;
    myObject.headquarters = projectResponse.data.headquarters;
    

    res.setHeader("content-type", "application/json");
    res.send(myObject);
});

export default Router;