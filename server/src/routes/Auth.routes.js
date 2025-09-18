import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
} from "../controllers/authController.js";
import { protect } from "../middleware/Auth.middleware.js";

const router = express.Router();


router.post("/register", registerUser);  
router.post("/login", loginUser);        
router.post("/refresh", refreshToken);   


router.post("/logout", protect, logoutUser);

export default router;
