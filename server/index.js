require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

const port = 3000


app.use(express.json())
app.use(express.static(path.join(__dirname,"../client/dist")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/src/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})