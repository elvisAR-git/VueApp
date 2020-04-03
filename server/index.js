const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const posts = require('./routes/api/post.js')
// app
const app = express()

// middleware

app.use(bodyParser.json())
app.use(cors())
app.use('/api/posts',posts)




const PORT = process.env.PORT || 3000
app.listen(PORT,'localhost',()=>{console.log("server running on port "+ PORT.toString(  ))})