const mongoose=require('mongoose');
const db=require('../config/db');

const {Schema}=mongoose;

const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}, {timestamps:true})

const UserModel=db.model('user',UserSchema)

module.exports=UserModel;