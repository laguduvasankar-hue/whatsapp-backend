import mongoose, { Types } from "mongoose";


const register=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    isDeleted:{
        type:Number,
        default:false
    }
})











const Register_user=mongoose.model("user",register)
















export {
    Register_user
}