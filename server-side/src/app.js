import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import adminRouter from "./routes/adminRouter.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/admin/", adminRouter);

// 404 handler for undefined routes
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Global error handler (should be last)
app.use(globalErrorHandler);

export default app;
