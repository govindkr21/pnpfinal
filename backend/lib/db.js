import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

// Force use local MongoDB (override environment variables)
const registerUri = "mongodb://localhost:27017/pnp-register";
const communityUri = "mongodb://localhost:27017/pnp-community";


// Connect to Register DB
export const registerDb = mongoose.createConnection(registerUri);
registerDb.once("open", () => console.log("✅ Register DB connected"));
registerDb.on("error", (err) => {
  console.error("❌ Register DB connection error:", err.message);
});

// Connect to Community DB
export const communityDb = mongoose.createConnection(communityUri);
communityDb.once("open", () => console.log("✅ Community DB connected"));
communityDb.on("error", (err) => {
  console.error("❌ Community DB connection error:", err.message);
});
