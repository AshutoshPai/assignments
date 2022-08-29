import express from "express";
import { createClient } from "../utils/db.mjs";

const Router = express.Router();

// GET
Router.get(["/", "/addBugs"], (req, res) => {
  res.render("addBugs");
})

// GET
Router.get("/bugs", async (req, res) => {
  const client = createClient();
  await client.connect();
  const db = client.db("nodeJsTraining");
  const collection = db.collection("bugs");
  const bugs = await collection.find().toArray();
  res.render("bugs", { bugs: bugs });
})

// POST
Router.post("/addBugs", async (request, response) => {

  const body = request.body

  const client = createClient();
  await client.connect();
  const db = client.db("nodeJsTraining");
  const bugs = db.collection("bugs");
  await bugs.insertOne(body)
  client.close()

  response.redirect("/bugs")

});

export default Router;