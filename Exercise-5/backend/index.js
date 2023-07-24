const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv').config();
const app=express();
const authController=require('./controllers/authController')
const PORT = process.env.PORT || 3000;

const connection= mongoose.createConnection(process.env.MONGO_URL).on('open',()=>{
    console.log("MongoDb Connected")
    }).on('error',()=>{
        console.log('MongoDB connection error')
})


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/auth',authController);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
   });
