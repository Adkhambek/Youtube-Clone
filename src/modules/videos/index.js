const express = require('express')
const router = express.Router()

const { UPLOAD } = require('./controller')

router.post('/api/video/upload', UPLOAD)

module.exports = router