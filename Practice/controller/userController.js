const UserService=require('../services/userServices')

exports.register=async(req,res,next)=>{
    try{
        const {email,password}=req.body
        const successRes=await UserService.registerUser(email,password);
        res.json({status:true,success:req.body});
    }
    catch(error){
        throw error;
    }
}