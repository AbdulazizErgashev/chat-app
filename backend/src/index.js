import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});

// https://cloud.mongodb.com/v2/6857b72c1154937f2c891764#/metrics/replicaSet/6857b7755b63986780a2451a/explorer/chat_db/users/find
// https://www.youtube.com/watch?v=ntKkVrQqBYY&ab_channel=Codesistency  56:12
