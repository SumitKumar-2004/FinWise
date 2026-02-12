const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();

app.use(express.json());

// ✅ SIMPLE GLOBAL CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// API Routes
app.use("/api/v2/expense", expenseRoutes);
app.use("/api/v2/auth", authRoutes);

module.exports = app;
