const mongoose=require('mongoose');
const db=require('../config/db');

const {Schema}=mongoose;

const UserSchema=new Schema({
    email:{
        type:String,
        lowercase:true,
        required:[true,"Email Required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'Password Required ']
    }
});

const UserModel=db.model('user',UserSchema)

module.exports=UserModel;