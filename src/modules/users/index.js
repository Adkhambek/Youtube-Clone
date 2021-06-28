const express = require('express')
const router = express.Router()

const { REGISTER, LOGIN, GET_ALL } = require('./controller')

router.get('/api/users', GET_ALL)
router.post('/api/register', REGISTER)
router.post('/api/login', LOGIN)

module.exports = router