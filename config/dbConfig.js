const mongoose = require("mongoose");
const { fillActiveChats } = require("../controllers/roomControllers");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING);
    console.log("✅ MongoDB connected");
    fillActiveChats()
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

module.exports = connectDB;
