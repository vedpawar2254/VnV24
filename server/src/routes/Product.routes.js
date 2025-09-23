import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { protect, isAdmin } from "../middleware/Auth.middleware.js";

const router = express.Router();

// Public routes
router.get("/", getProducts); 
router.get("/:id", getProductById);

// Protected
router.post("/", protect, isAdmin, createProduct);    
router.put("/:id", protect, isAdmin, updateProduct);  
router.delete("/:id", protect, isAdmin, deleteProduct); 

export default router;
