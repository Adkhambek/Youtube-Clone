//express
const express = require('express')
const app = express()

//node buildin modules
const path = require('path')

//middleware
app.use(express.static(path.join(__dirname, 'public')))

//modules
const modules = require('./modules')
app.use(modules)

app.listen(8005, () => console.log('server is running on http://localhost:8005'))