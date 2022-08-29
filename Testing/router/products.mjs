import { ObjectID } from "bson";
import express from "express";
import { createClient } from "../utils/db.mjs"
const Router = express.Router();


Router.get("/", async (request, response) => {
    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const docs = await collection.find().toArray();
    client.close()

    response.json(docs);

});

Router.get("/:id", async (request, response) => {

    const id = request.params.id;

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const docs = await collection.findOne({ _id: ObjectID(id) });
    client.close()

    response.json(docs);

});

Router.post("/", async (request, response) => {

    const body = request.body

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
    const insertedDoc = await collection.insertOne(body)
    client.close()

    response.json(insertedDoc);

});

Router.put("/:id", async (request, response) => {

    const id = request.params.id;
    const body = request.body;

    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");

    const doc = await collection.updateOne({ _id: ObjectID(id) }, { $set: body })
    client.close()

    response.json(doc);

});

Router.delete("/delete/:id", async (request, response) => {

    const id = request.params.id;
  
    const client = createClient();
    await client.connect();
    const db = client.db("nodeJsTraining");
    const collection = db.collection("products");
  
    const doc = await collection.deleteOne({ _id : ObjectID(id) })
    client.close()
  
    response.json(doc);
  
  });

export default Router;