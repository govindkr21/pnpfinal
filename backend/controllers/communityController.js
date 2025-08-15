// backend/controllers/communityController.js

import Community from "../models/communityModel.js";

// ✅ Validator middleware (simple example)
export const communityValidators = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, email, and message are required" });
    }
    next();
};

// ✅ Create community entry
export const createCommunity = async (req, res) => {
    try {
        const communityEntry = new Community(req.body);
        await communityEntry.save();
        res.status(201).json({ message: "Community entry saved successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Get all community entries
export const getAllCommunities = async (req, res) => {
    try {
        const data = await Community.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
