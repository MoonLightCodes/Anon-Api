const express = require("express");
const app = express();
module.exports = { app };
const env = require("dotenv");
env.config();
const connectDB = require("./config/dbConfig.js"); // or wherever your file is
connectDB();
const { server } = require("./websocket/socketIoServer.js");

const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(require("./middleware/logger.js"));//logger
app.use("/user", require("./routes/userRoutes"));
app.use("/api", require("./routes/roomRoutes"));

const port = process.env.PORT || 8888;
server.listen(port, () => console.log("server listening on", port));
