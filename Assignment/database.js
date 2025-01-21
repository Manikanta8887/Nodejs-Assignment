var express = require("express")

var mysql2 = require("mysql2")

var connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"constraints"
})

connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("mysql is connected")
    }
})

module.exports = connection