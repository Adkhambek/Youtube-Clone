const model = require('./model')

const GET_ALL = (req, res) => {
    res.status(200).json(model.fetchAll())
}

module.exports = { GET_ALL }