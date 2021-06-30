const path = require('path')
const fs = require('fs')

const insertVideo = (user, videoName, userId) => {
    let videos = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), 'utf-8')
    videos = videos ? JSON.parse(videos) : []
    const id = videos.length ? videos[videos.length - 1].id + 1 : 1
    const newVideo = {
        id,
        userId,
        ...user,
        videoName
    }
    videos.push(newVideo)
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'videos.json'), JSON.stringify(videos, null, 4))
    console.log(newVideo);
    return newVideo

}

module.exports = {
    insertVideo
}