const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        technologies: {
            type: [String],
            required: true,
        },

        category: {
            type: String,
            required: true,
            enum: ["frontend", "full-stack"],
            default: "frontend",
        },

        image: {
            type: String,
        },

        githubLink: {
            type: String,
        },

        liveLink: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;