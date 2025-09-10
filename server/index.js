const express = require("express");
const http = require("http");
const cors = require("cors");
/// Keys etc.
require("dotenv").config();

/// Server setup
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

const PORT = process.env.PORT || 3003;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
