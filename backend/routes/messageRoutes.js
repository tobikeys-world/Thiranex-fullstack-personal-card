const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

// POST a new message
router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Please fill in all fields.",
            });
        }

        const newMessage = await Message.create({
            name,
            email,
            message,
        });

        res.status(201).json({
            message: "Message sent successfully!",
            data: newMessage,
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to send message.",
            error: error.message,
        });
    }
});

module.exports = router;