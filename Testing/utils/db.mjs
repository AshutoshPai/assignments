import { MongoClient } from "mongodb" 

export const DB_URL = "mongodb://127.0.0.1:27017"

export function createClient(){
    const client = new MongoClient(DB_URL);
    return client;
}