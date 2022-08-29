import mongoose from "mongoose";

const UserSchema = mongoose.Schema({    
    ID : String,
    product : String,
    data : String,
    price : String
})

export const ShoppingListModel = mongoose.model("Shopping List", UserSchema, "shoppingList")