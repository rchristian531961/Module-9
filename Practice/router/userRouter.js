const router= require('express').Router();
const UserController=require('../controller/userController')

router.post('/registration',UserController.register)

module.exports=router;