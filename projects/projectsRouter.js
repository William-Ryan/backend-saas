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

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Project.findById(id)
    .then(project => {
        if (project){
            Project.update(changes, id)
            .then(updatedProject => {
                res.status(200).json(updatedProject)
            });
        } else {
            res.status(404).json({ message: 'Could not find this given Project' })
        }
    })
    .catch(() => {
        res.status(500).json({ message: 'Failed to update Project' })
    })
})

module.exports = router