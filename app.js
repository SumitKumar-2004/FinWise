const express = require("express");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ MUST COME BEFORE ROUTES
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v2/expense", expenseRoutes);
app.use("/api/v2/auth", authRoutes);

module.exports = app;
