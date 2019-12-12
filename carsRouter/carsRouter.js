const express = require('express')

const router = express.Router()

const carsDb = require('./carsDb')

router.get('/', (req,res) => {
    carsDb.get()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

router.post('/', (req,res) => {
    carsDb.insert(req.body)
        .then(cars => {
            res.status(201).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports = router