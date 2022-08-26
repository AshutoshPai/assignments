import express from "express";
import OrderRouter from "./orders.mjs";

import "./mongoose-db.mjs"

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended : true } ))
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use("/", OrderRouter);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})