import { io } from "socket.io-client";

let socket;

export const socketServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log("Connected to server", socket.id);
  });
};
