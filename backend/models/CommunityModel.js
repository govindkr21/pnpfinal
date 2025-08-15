import mongoose from "mongoose";
import { communityDb } from "../lib/db.js";

const CommunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  interests: { type: [String], default: [] },
  source: { type: String, default: "community_modal" },
  createdAt: { type: Date, default: Date.now },
});

export default communityDb.model("Community", CommunitySchema);
