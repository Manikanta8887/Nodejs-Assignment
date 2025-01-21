var model = require("../Models/usermodel.js")

exports.controller = async (req, res) => {
    let data = await model.users()
    if(data.length>0){
        res.send(data)
    }else{
        res.send("There is an error")
    }
}

exports.controller1 = async (req, res) => {
    const body = req.body
    let data = await model.register(req,res)
    if(data.length>0){
        res.send(data)
    }else{
        res.send("There is an error")
    }
}
