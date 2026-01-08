const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel =require("./Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sandipdey7890:PXhX0WdQyXa6mihY@cluster0.fuehrqq.mongodb.net/?appName=Cluster0");



app.post("/login",(req,res)=>{
    const {email,password}= req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("The password in incorrect ")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
app.listen(5000,()=>{
    console.log("server is running")
})
