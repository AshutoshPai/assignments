import mongoose from "mongoose";

const UserSchema = mongoose.Schema({    
    name : String,
    email : String,
    password : { required : true, type : String  },
    userType : String
}, {
    versionKey: false
})

export const UserModel = mongoose.model("Shopping Cart Users", UserSchema, "shoppingCartUsers")