const model = require('./model')

const REGISTER = (req, res) => {
    const user = model.insertUser(req.body)
    if(user){
        res.status(201).json({message: "The user has been registered", body: user})
    } else {
        res.status(400).json({message: "Somthing wrong"})
    }
    
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