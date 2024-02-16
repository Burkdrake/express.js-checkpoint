// const express = require('express')
// const app = express()

// app.get('/intro', function (req, res) {
//   res.send('Drake')
// })

// app.listen(3000)

const express = require('express')
const path = require('path')
const app = express()
//set static folder path
app.use(express.static(path.join(__dirname,'pages')));

app.get('/', function (req, res) {
  res.send('<h1>Welcome</h1>')
})
app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/pages/about.html')
})
app.listen(4000,() => {
    console.log(`server listening on port 4000`)
})