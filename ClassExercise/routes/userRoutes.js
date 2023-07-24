const express=require('express');

const router=express.Router();

const controllers=require('../controllers'); //index.js

router.get('/api/users',(req,res)=>{
    controllers.userController.getUsers(res);
})

router.post('/api/create',(req,res)=>{
    controllers.userController.createUser(req.body,res)
})

router.get('/api/getAUser',(req,res)=>{
    controllers.userController.getAUser(res);
})

module.exports=router;