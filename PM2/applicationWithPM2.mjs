import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    fs.readFile("./jsonData.json", (err, data) => {
        if (err) {
            res.status(500).send("Internal Server Error.");
            return false;
        }
        res.setHeader("content-type", "application/json");
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})