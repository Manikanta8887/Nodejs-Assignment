var express = require("express")

var fs = require("fs")

var router = express.Router()

var connection = require("../database.js")

router.post("/",(req,res)=>{
    res.send("Hi This is userrouters api")
})

router.post("/users",(req,res)=>{
    connection.query("select * from practicenode",(err,data)=>{
        if(err){
            res.send(err.message)
        }else{
            fs.writeFile("data.env",JSON.stringify(data),(err)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send(data)
                }
            })
        }
    })
})

module.exports=router