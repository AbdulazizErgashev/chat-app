import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});

// https://cloud.mongodb.com/v2/6857b72c1154937f2c891764#/metrics/replicaSet/6857b7755b63986780a2451a/explorer
// https://www.youtube.com/watch?v=ntKkVrQqBYY&ab_channel=Codesistency   22:03
