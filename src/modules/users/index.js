const express = require('express')
const router = express.Router()

const { GET_ALL } = require('./controller')

router.get('/api/users', GET_ALL)

module.exports = router