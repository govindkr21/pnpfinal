import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import razorpayRoutes from "./routes/razorpay.js";
import communityRoutes from "./routes/communityRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7400;

// ----------------------
// MIDDLEWARE
// ----------------------
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);
app.use(express.json());

// ----------------------
// ROUTES
// ----------------------
app.use("/api/razorpay", razorpayRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/seminar", registerRoutes);

// Optional: test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
