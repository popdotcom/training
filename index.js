const express = require('express')
const app = express()
const port = 3000
// require()

app.get('/', require('./home.js'))

app.get('/detail', function(req, res) {
    var detail = req.query.x;
    res.send(detail)
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})