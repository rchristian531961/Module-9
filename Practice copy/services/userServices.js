const UserModel=require('../model/usermodels')

class UserServices{
    static async registerUser(username,email,password){
        try{
            const createUser=new UserModel({username,email,password})
            return await createUser.save();

        }catch(err){
            console.log(err+ "at UserServices Folder")
        }

    }

    static async getUsers(){
        try{

        }
        catch(err){
            console.log(err + " at UserServices")
        }
    }
}

module.exports=UserServices;