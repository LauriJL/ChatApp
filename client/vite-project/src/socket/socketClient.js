import { io } from "socket.io-client";
import { store } from "../store/index.js";
import { storeResponse } from "../store/chatSlice.js";

let socket;

export const socketServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    // console.log("Connected to server", socket.id);
    socket.on("ai-response", (data) => {
      store.dispatch(storeResponse(data));
    });
  });
};

export const sendInputToServer = (message, chatID) => {
  let state = store.getState();
  const chat = state.chat.chats.find((chat) => chat.chatID === chatID);
  // Send input to server
  socket.emit("user-input", chat);
};
