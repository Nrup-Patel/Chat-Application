import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT; 

app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
    connectDB();
});
