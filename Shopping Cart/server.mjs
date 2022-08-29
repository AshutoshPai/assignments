import express from "express";
import loginRouter from "./router/login.mjs";
import signupRouter from "./router/signUp.mjs";
import adminRouter from "./router/admin.mjs";
import shoppingListRouter from "./router/shoppingList.mjs";
import "./utils/db.mjs"

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended : true } ))
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use(["/", "/login"], loginRouter);
app.use("/shoppingList", shoppingListRouter);
app.use("/signUp", signupRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
})