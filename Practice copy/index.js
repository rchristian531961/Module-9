const app=require('./app');
const db=require('./config/db')
const UserModel=require('./model/usermodels')
const PORT=3000;

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port: http://localhost:${PORT}`)
})
