import express from "express";
import {
  placeOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/Order.controller.js";

import { protect, isAdmin } from "../middleware/Auth.middleware.js";

const router = express.Router();


router.post("/", protect, placeOrder);
router.get("/myorders", protect, getMyOrders);
router.get("/:id", protect, getOrderById);
router.get("/", protect, isAdmin, getAllOrders);

router.put("/:id/status", protect, isAdmin, updateOrderStatus);

export default router;
