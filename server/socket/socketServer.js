const { Server } = require("socket.io");
const { messageHandler } = require("./handlers");

const registerSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // allow all origins...adjust to your needs
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    // console.log(`User: ${socket.id}`);
    socket.on("user-input", (data) => {
      console.log("Received user input:", data);
      messageHandler(socket, data);
    });
  });
};

module.exports = { registerSocketServer };
