const model = require('./model')
const path = require('path')

const REGISTER = (req, res) => {
    const imageUpload = req.files.img_url
    const imageName = new Date().getTime() + '_' + imageUpload.name.replace(/\s/g, '_').trim()
    imageUpload.mv(path.join(process.cwd(), 'src', 'profile-img', imageName), err => {
        if(err) console.log(err);
        const user = model.insertUser(req.body, imageName)
        if(user){
            res.redirect('/admin')
        } else {
            res.status(400).json({message: "Somthing wrong"})
        }
    })
    
    
}

const LOGIN = (req, res) => {
    const user = model.loginUser(req.body)
    if(user){
        res.header('message', 'you were successfully loged in')
        res.redirect('/')
    } else {
        res.status(400).json({message: "Somthing wrong"})
    }
}

const GET_ALL = (req, res) => {
    res.status(200).json(model.fetchAll())
}

module.exports = { REGISTER, LOGIN, GET_ALL }