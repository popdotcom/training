var json = require('./listpet.json')
var fs = require('fs')
module.exports = function (req, res) {
    var newid = parseInt(req.query.id)
    var newname = req.query.name
    var newavailable = parseInt(req.query.available)
    var newdetail = req.query.detail
    fs.readFile('listpet.json',function (err, data){
    var json = JSON.parse(data)
    json.listPet.push({"id": newid,
                       "name": newname,
                       "available": newavailable,
                       "detail": newdetail
                    }) 
    fs.writeFile("listpet.json", JSON.stringify(json),function(err, result) {
        if(err) console.log('error', err)
      })
})
        res.redirect('/')
}