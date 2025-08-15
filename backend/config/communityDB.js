// backend/config/communityDb.js
import mongoose from "mongoose";

const communityDbURI = process.env.MONGO_URI_COMMUNITY;

export const connectCommunityDB = async () => {
  try {
    await mongoose.createConnection(communityDbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Community Database");
  } catch (error) {
    console.error("❌ Community DB connection failed:", error);
    process.exit(1);
  }
};
