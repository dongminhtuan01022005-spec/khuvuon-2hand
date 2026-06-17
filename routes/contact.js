const express = require('express');
const router = express.Router();
const contactModel = require('../models/contact');
router.post('/', async (req, res) => {
    try {

        const {
            FullName,
            Email,
            Phone,
            Subject,
            MessageContent
        } = req.body;

        const result = await contactModel.createMessage({
            FullName,
            Email,
            Phone,
            Subject,
            MessageContent
        });

        res.status(201).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
});

router.get('/', async (req, res) => {
    try {

        const messages =
            await contactModel.getAllMessages();

        res.json({
            success: true,
            count: messages.length,
            data: messages
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false
        });

    }
});

module.exports = router;