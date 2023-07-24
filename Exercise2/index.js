const express = require("express");
const app = express();
const multer=require("multer");
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const categoryRoute=require("./routes/categories")

require("dotenv").config();
const dbConnect=require('./config/db')
// parse requests of content-type - application/json

const PORT = process.env.PORT || 5000;

//uploading image below using multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{{
        //for testing here
        cb(null,"hello.jpeg")
        //need below for user input
        // cb(null,req.body.name);
    }}
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded")
})

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)
app.get("/", (req, res) => {res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests


app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});