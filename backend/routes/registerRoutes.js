import { Router } from "express";
import {
  createOrder, verifyPayment,
  
  createOrderValidators, verifyPaymentValidators
} from "../controllers/registerController.js";

const router = Router();

router.post("/create-order", createOrderValidators, createOrder);
router.post("/verify-payment", verifyPaymentValidators, verifyPayment);

export default router;
