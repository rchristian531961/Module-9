const router=require("express").Router();
const User=require("../models/User")
const Post=require("../models/Post")
const bcrypt=require('bcrypt')

//CREATE POST
router.post("/",async(req,res)=>{
    const newPost=newPost(req.body);
    try{
        const savedPost= await newPost.save();
        res.status9200.json("Saved Post");
    }
    catch(error){
        res.status(500).json(error)
    }
})

//UPDATE
router.put("/:id",async (req,res)=>{
    try{
        const post=Post.findById(req.params.id);

        if(post.username ===req.body.username){
            try{
                const updatedPost=await Post.findByIdAndUpdate(
                    req.params.id,
                    {$set:req.body},
                    {new:true}
                ) 
            }
            catch(error){
                res.status(500).json(error)
            }
        }
        else{
            res.status(401).json("You can update only your post!")
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})

//DELETE
router.delete("/:id",async (req,res)=>{
    try{
        const post=Post.findById(req.params.id);

        if(post.username ===req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post as been deleted")
            }
            catch(error){
                res.status(500).json(error)
            }
        }
        else{
            res.status(401).json("You can update only your post!")
        }
    }
    catch(error){
        res.status(500).json(error)
    }
})

//GET USER
router.get("/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(error){
        res.status(500).json(error);
    }
})

router.get("/",async(req,res)=>{
    //query gets from the /----- in postman ?user=name
    const username=req.query.user;
    const catName=req.query.cat;
    try{
        var posts;
        if(username){
            posts=await Post.find({username:username})
        }
        else if(catName){
            posts=await Post.find({categories:{
                $in:[catName]
            }})
        }else{
            posts=await Post.find();
        }
        res.status(200).json(post);
    }
    catch(error){
        res.status(500).json(error);
    }
})

module.exports=router;