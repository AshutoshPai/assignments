import express from "express";
import ProductsRouter from "./router/products.mjs"

export const app = express();

app.use(express.json())
app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000

app.use("/products", ProductsRouter);


app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});