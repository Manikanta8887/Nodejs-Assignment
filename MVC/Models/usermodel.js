var connection = require("../database")

exports.users = () => {
    return new Promise((resolve, reject) => {
        connection.query("Select * from practicenode", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

exports.register = (body) => { 
    var {cid,cname,cemail,cage} = body
    var query = "Insert into practicenode (cid,cname,cemail,cage) values(?,?,?,?)"
    return new Promise((resolve, reject) => {
        connection.query(query,[cid,cname,cemail,cage],(err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}



