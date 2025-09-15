import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { currentChatId: null, chats: [], loading: false },
});

export default chatSlice.reducer;
