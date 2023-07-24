const router= require('express').Router();
const UserController=require('../controller/userController')

router.post('/registration',UserController.register)

router.get('/getUsers',UserController.getUsers);

module.exports=router;