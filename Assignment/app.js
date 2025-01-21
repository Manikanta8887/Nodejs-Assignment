var express = require("express")

var app = express()

var userrouters = require("./Routers/userrouters.js")

app.use(express.json())

app.use("/auth",userrouters)

app.get("/",(req,res)=>{
    res.send("Hi, Welcome to the Website")
})

var port = 4408

app.listen(port,(req,res)=>{
    console.log("Server is Running")
})