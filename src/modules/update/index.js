const express = require('express')
const router = express.Router()
const { GET } = require('./controller')

router.get('/update/:id', GET)

module.exports = router