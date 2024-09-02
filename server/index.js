import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import {CLIENT_URL} from "../common/config.js"
import cors from "cors";
dotenv.config();
import cookieParser from "cookie-parser";
const app = express();

connectDB();
app.use(cors({ credentials: true, origin : CLIENT_URL }));
app.use(cookieParser());
app.use(express.json());

app.use(morgan("dev"));
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/", (req, res) => {
  res.send("hello");
});
app.listen(process.env.PORT, () => {
  console.log("app is running");
});
