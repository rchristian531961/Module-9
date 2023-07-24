'use strict';

const UserService=require('../services/userServices')
let Models=require('../model/usermodels')

const getUsers=async(req,res)=>{
    
}
const register=async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const successRes=await UserService.registerUser(username,email,password);
        res.json({status:true,success:req.body});
    }
    catch(error){
        throw error;
    }
}

module.exports={getUsers,register}

// exports.register=async(req,res)=>{
//     try{
//         const {username,email,password}=req.body
//         const successRes=await UserService.registerUser(username,email,password);
//         res.json({status:true,success:req.body});
//     }
//     catch(error){
//         throw error;
//     }
// }