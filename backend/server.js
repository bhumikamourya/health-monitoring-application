const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/users" , require("./routes/userRoutes.js"));
app.use("/api/dailylog", require("./routes/DailyLog.js"));
app.use("/api/metrics", require("./routes/metrics.js"));

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});