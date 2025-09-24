import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { currentChatId: null, chats: [], loading: false },
  reducers: {
    storeMessage: (state, action) => {
      // state.chats.push(action.payload);
      const { chatID, message } = action.payload;
      const chat = state.chats.find((c) => c.chatID === chatID);
      if (chat) {
        chat.chats.push(message);
      } else {
        state.chats.push({ chatID, chats: [message] });
      }
      state.loading = true;
    },
    storeResponse: (state, action) => {
      const { content, role, chatID } = action.payload;
      const chat = state.chats.find((chat) => chat.iD === chatID);
      if (chat) {
        chat.chats.push({ role, content });
      }
      state.loading = false;
    },
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload;
    },
  },
});

export const { setCurrentChatId, storeMessage, storeResponse } =
  chatSlice.actions;
export default chatSlice.reducer;
