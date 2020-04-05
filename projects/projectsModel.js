const db = require('../data/dbConfig.js')

module.exports = {
    findAll,
    add,
    update,
    remove
}

function findAll(){
    return db('projects')
}

function add(data){
    return db('projects')
        .insert(data)
}

function update(changes, id){
    return db('projects')
        .update(changes)
        .where({ id })
}

function remove(id){
    return db('projects')
        .where({ id })
        .del()
}