const express = require("express");
const router = express.Router();

const Project = require("../models/project");

// GET all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find().sort({
            createdAt: -1,
        });

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
        const {
            title,
            description,
            technologies,
            category,
            image,
            githubLink,
            liveLink,
        } = req.body;

        if (
            !title ||
            !description ||
            !technologies ||
            !category
        ) {
            return res.status(400).json({
                message:
                    "Title, description, technologies and category are required",
            });
        }

        if (!["frontend", "full-stack"].includes(category)) {
            return res.status(400).json({
                message:
                    "Category must be either frontend or full-stack",
            });
        }

        const project = await Project.create({
            title,
            description,
            technologies,
            category,
            image,
            githubLink,
            liveLink,
        });

        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({
            message: "Failed to create project",
            error: error.message,
        });
    }
});

module.exports = router;