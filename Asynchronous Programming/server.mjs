import express from "express";
import empsRouter from "./router/employeesDetails.mjs";
import projectRouter from "./router/projectDetails.mjs";
import empRouter from "./router/employeeDetails.mjs";
import apiEmployee from "./router/apiEmployeeDetails.mjs"

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended : true } ))
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use("/employee", empsRouter);
app.use("/project", projectRouter);
app.use("/getemployeedetails", empRouter);
app.use("/apiEmployeeDetails", apiEmployee);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})