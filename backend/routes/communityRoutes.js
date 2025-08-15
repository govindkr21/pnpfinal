import express from "express";
import Community from "../models/CommunityModel.js";

const router = express.Router();

// POST /api/community/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, interests, source } = req.body;

    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Name, email, and phone are required." });
    }

    // Optional: prevent duplicate emails
    const existing = await Community.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const newMember = new Community({
      name,
      email,
      phone,
      interests: interests || [],
      source,
    });

    await newMember.save();

    return res
      .status(201)
      .json({ success: true, message: "Successfully registered!" });
  } catch (err) {
    console.error("Community registration error:", err);
    return res.status(500).json({ message: "Server error." });
  }
});

export default router;
