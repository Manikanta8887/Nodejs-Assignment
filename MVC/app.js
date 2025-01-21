var express = require("express")

var app = express();

app.use(express.json())

var userrouter = require("./Routers/userrouter.js")

app.use("/auth",userrouter)

app.get("/",(req,res)=>{
    res.send("Hi Welcome to the Website Main Page")
})

var port = 4007;

app.listen(port,(req,res)=>{
    console.log("Server is Running")
})