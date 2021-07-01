const express = require('express')
const router = express.Router()

const { UPLOAD, GET_VIDEO_BY_USERID, GET_VIDEO_BY_ID, DELETE, UPDATE } = require('./controller')

router.post('/api/video/upload', UPLOAD)
router.get('/api/video/delete/:id', DELETE)
router.get('/api/video/delete/:id', DELETE)
router.get('/api/video', GET_VIDEO_BY_USERID)
router.get('/api/video/:id', GET_VIDEO_BY_ID)
router.post('/api/video/:id', UPDATE)

module.exports = router