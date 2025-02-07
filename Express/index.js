const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute=require("./Route/DataRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/formData", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async () => {
    console.log("✅ MongoDB connected successfully!");
})
.catch(err => {
    console.error("❌ MongoDB connection error:", err);
});

app.use('/api',userRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
