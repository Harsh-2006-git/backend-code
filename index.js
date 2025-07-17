import * as dotenv from "dotenv";
import express, { json } from "express";
import { connectDB, sequelize } from "./config/database.js";
import errorHandler from "./middlewares/errorHandler.js";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";

import cors from "cors";

dotenv.config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "*", // Consider restricting this in production
  })
);

const PORT = process.env.PORT || 3001;

// Middleware
app.use(json());
app.use(helmet());

// Uncomment if you need rate limiting
// const limiter = rateLimit({
//     windowMs: 60 * 1000, // 1 minute
//     max: 60,
// });
// app.use(limiter);

// Routes
app.use("/api/v1/auth", authRoutes);

// Error handling middleware (should be last)
app.use(errorHandler);
await sequelize.sync({ alter: true });
app.use(express.urlencoded({ extended: true }));

// or alter: true

// Clean server startup
const startServer = async () => {
  try {
    console.log("🔄 Starting server...");

    // Connect to database (silent)
    await connectDB();

    // Sync database without verbose logging
    // Don't do this anymore:
    // await sequelize.sync({ alter: true });

    // Instead, use:
    await sequelize.sync(); // Safe if DB is already ready

    // Start server
    app.listen(PORT, "0.0.0.0", () => {
      console.log("✅ Database synchronized");
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log("📧 Email verification system ready");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
