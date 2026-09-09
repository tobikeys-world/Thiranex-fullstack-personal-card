const express = require("express");
const router = express.Router();

const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch projects",
            error: error.message,
        });
    }
});

// POST a new project
router.post("/", async (req, res) => {
    try {
        const project = await Project.create(req.body);

        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create project",
            error: error.message,
        });
    }
});

module.exports = router;