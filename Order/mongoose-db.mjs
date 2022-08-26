import mongoose from "mongoose";

export const DB_URL = "mongodb://127.0.0.1:27017/nodeJsTraining"

async function main(){
    await mongoose.connect(DB_URL);
    console.log("Connection created successfully.")
}

main();