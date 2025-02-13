const express = require("express");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON request body

// Routes
app.use("/posts", postRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
