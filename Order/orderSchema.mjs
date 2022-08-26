import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    address: String,
    email: String,
    items: {
        item1: String,
        item2: String,
        item3: String,
        item4: String
    },
    date : Date
}, {
    versionKey: false
})

export const OrderModel = mongoose.model("Orders", UserSchema, "orders")