const express = require('express')
const app = express()
const port = 3000
// require()

app.get('/', require('./home.js'))

app.get('/detail/:id', require('./detail.js'))

app.get('/add',require('./addpet.js'))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})