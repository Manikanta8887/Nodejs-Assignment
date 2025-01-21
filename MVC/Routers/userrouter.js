var express = require("express")

var router = express.Router()

var routers = require("../Controllers/usercontroller.js")

router.post("/user",routers.controller)

router.post("/register",routers.controller1)

router.get("/",(req,res)=>{
    res.send("This is Router api")
})

router.post("/login",(req,res)=>{
    res.send("This is login api")
})




module.exports=router