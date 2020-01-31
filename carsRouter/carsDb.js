const db = require('../data/dbConfig')

module.exports ={
    get,
    insert
}

function get() {
    return db('cars')
}

function insert(car) {
    return db('cars')
        .insert(car)
        // .then(id => {
        //     return id
        // })
}