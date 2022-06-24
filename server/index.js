require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const axios = require("axios");


const port = 3000

app.use(express.json())
app.use(express.static(path.join(__dirname,"../client/dist")))


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})