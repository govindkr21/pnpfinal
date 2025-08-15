import express from "express";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Register } from "../models/registerModel.js";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
router.post("/create-order", async (req, res) => {
  try {
    const { amount, name, email, occupation, address } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100, // in paise
      currency: "INR",
    });

    // Save initial registration data (optional: without paymentId yet)
    const newUser = new Register({
      name,
      email,
      occupation,
      address,
      paymentId: order.id,
      paymentStatus: "pending",
    });

    await newUser.save();

    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Verify payment
router.post("/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generated_signature === razorpay_signature) {
      await Register.findOneAndUpdate(
        { paymentId: razorpay_order_id },
        { paymentStatus: "paid" }
      );

      res.json({ status: "success" });
    } else {
      res.status(400).json({ status: "failure" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
