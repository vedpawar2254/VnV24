import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db"

dotenv.config()
connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan("dev"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import morgan from "morgan";
// import connectDB from "./config/db.js";


// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
