const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(process.env.MONGOOSE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

module.exports = connectDB;
