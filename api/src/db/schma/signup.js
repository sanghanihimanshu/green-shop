import { Schema, model } from "mongoose";

const UserSchma = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true 
    },
    contect:{
        type:String,
        required:true
    },
    collagecode:{
        type:Number,
        required: true 
    },
    collage:{
        type:String,
        required: true 
    },
})

export const User = model('User',UserSchma)