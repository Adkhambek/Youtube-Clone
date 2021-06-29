//express
const express = require('express')
const app = express()

//fileUpload
const fileUpload = require('express-fileupload')

//node buildin modules
const path = require('path')

//middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use('/profile', express.static(path.join(__dirname, 'profile-img')))
app.use(fileUpload())
app.use(express.urlencoded({extended: true}))

//modules
const modules = require('./modules')
app.use(modules)

app.listen(8005, () => console.log('server is running on http://localhost:8005'))