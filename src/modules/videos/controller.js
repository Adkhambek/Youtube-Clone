const model = require('./model')
const path = require('path')
const jwt = require('../../lib/jwt')

const UPLOAD = (req, res) => {
    const videoUpload = req.files.video
    const videoName = new Date().getTime() + '_' + videoUpload.name.replace(/\s/g, '_').trim()
    videoUpload.mv(path.join(process.cwd(), 'src', 'videos', videoName), err => {
        if(err) console.log(err);
        const userId = jwt.verify(req.cookies.userId) - 0
        const video = model.insertVideo(req.body, videoName, userId)
        if(video){
            res.redirect('/upload')
        } else {
            res.status(400).json({message: "Somthing wrong"})
        }
    })
}

module.exports = { UPLOAD }