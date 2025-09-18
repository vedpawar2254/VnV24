import express from "express";
import { protect } from "../middleware/Auth.middleware.js";

const router = express.Router();

router.get("/me", protect, (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
  });
});

export default router;
