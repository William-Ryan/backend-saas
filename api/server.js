const express = require("express");
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/auth-router.js')
const projectRouter = require('../projects/projectsRouter.js')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/projects', projectRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;