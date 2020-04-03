const express = require('express');

const Project = require('./projectsModel.js')

const router = express.Router()

router.get('/', (req, res) => {

    Project.findAll()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(() => {
        res.status(500).json({ message: 'Error Retrieving Projects' })
    })
})

module.exports = router