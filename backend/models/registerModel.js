// backend/models/RegisterModel.js
import mongoose from "mongoose";          // only once
import { registerDb } from "../lib/db.js"; // correct relative path

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  occupation: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  paymentId: { type: String, default: null },
  paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const Register = registerDb.model("Register", registerSchema);


