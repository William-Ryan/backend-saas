const db = require('../data/dbConfig.js')

module.exports = {
    findAll,
    add
}

function findAll(){
    return db('projects')
}

function add(data){
    return db('projects')
    .insert(data)
}