const express = require('express')
const router = express.Router()

const { UPLOAD, GET_VIDEO_BY_ID } = require('./controller')

router.post('/api/video/upload', UPLOAD)
router.get('/api/video', GET_VIDEO_BY_ID)

module.exports = router