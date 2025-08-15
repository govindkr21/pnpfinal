import Razorpay from "razorpay";
import crypto from "crypto";
import { Register } from "../models/registerModel.js"; // Register model (register DB)
import dotenv from "dotenv";

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ VALIDATOR MIDDLEWARE
export const createOrderValidators = (req, res, next) => {
  const { amount, name, email, occupation, address } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Valid amount is required" });
  }
  if (!name || !email || !occupation || !address) {
    return res.status(400).json({ error: "All user details are required" });
  }

  next(); // pass control to createOrder
};

// ======================
//  CREATE ORDER
// ======================
export const createOrder = async (req, res) => {
  try {
    const {
      amount,
      currency = "INR",
      name,
      email,
      phone,
      occupation,
      address,
    } = req.body;

    const options = {
      amount: amount,
      currency,
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save initial registration data
    const newUser = new Register({
      name,
      email,
      occupation,
      address,
      paymentId: order.id,
      paymentStatus: "pending",
    });

    await newUser.save();

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ======================
//  VERIFY PAYMENT & REGISTER USER
// ======================
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // Update payment status to paid
      await Register.findOneAndUpdate(
        { paymentId: razorpay_order_id },
        { paymentStatus: "paid" }
      );

      return res
        .status(200)
        .json({ success: true, message: "Payment verified & user registered" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid signature" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Validator for verifying payment
export const verifyPaymentValidators = (req, res, next) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ error: "Payment details are incomplete" });
  }

  next();
};
