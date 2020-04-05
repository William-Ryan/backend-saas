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

router.post('/', (req, res) => {
    const projectData = req.body;

    Project.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(() => {
        res.status(500).json({ message: 'Failed to create new Project' })
    })
})

module.exports = router