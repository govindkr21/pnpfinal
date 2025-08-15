// backend/config/registerDb.js
import mongoose from "mongoose";

const registerDbURI = process.env.MONGO_URI_REGISTER;

export const connectRegisterDB = async () => {
  try {
    await mongoose.createConnection(registerDbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to Registration Database");
  } catch (error) {
    console.error("❌ Registration DB connection failed:", error);
    process.exit(1);
  }
};
