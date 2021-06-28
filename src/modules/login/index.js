const express = require('express')
const router = express.Router()
const { GET } = require('./controller')

router.get('/login', GET)

module.exports = router