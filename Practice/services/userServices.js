const UserModel=require('../model/usermodels')

class UserServices{
    static async registerUser(email,password){
        try{
            const createUser=new UserModel({email,password})
            return await createUser.save();

        }catch(err){
            console.log(err+ "at UserServices Folder")
        }

    }
}

module.exports=UserServices;