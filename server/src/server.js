import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoutes from "./routes/Auth.routes.js";
import userRoutes from "./routes/User.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
