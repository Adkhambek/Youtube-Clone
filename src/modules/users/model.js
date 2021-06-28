const path = require('path')
const fs = require('fs')

const fetchAll = () => {
    let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'), 'utf-8')
    users = users ? JSON.parse(users) : []
    return users
}

module.exports = { fetchAll }
