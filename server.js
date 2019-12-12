const express = require('express')
const carsRouter = require('./carsRouter/carsRouter')

const server = express()

server.use(express.json())

server.use('/cars', carsRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Cars API</h2>`)
})

module.exports = server