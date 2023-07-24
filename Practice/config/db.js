const mongoose=require('mongoose');
//created connection below: When active it opens, on error it displays
const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/Practice').on('open',()=>{
    console.log("MongoDb Connected")
    }).on('error',()=>{
        console.log('MongoDB connection error')
})
module.exports=connection;