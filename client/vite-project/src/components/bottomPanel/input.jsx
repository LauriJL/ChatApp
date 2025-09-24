import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { sendInputToServer } from "../../socket/socketClient"; // Import the function to send input to server
import {
  setCurrentChatId,
  storeMessage,
  // storeResponse,
} from "../../store/chatSlice"; // Import the action to set current chat ID

export default function ChatInput() {
  const [inputText, setInputText] = useState("");
  let chatID = useSelector((state) => state.chat.currentChatId);
  const dispatch = useDispatch();

  const sendInput = () => {
    if (inputText.trim() !== "") {
      // Handle the input submission
      const message = { role: "user", content: inputText.trim() }; // params needed for OpenAI API
      if (!chatID) {
        chatID = uuid();
        dispatch(setCurrentChatId(chatID));
        // console.log("New chat created with ID:", chatID);
      }
      // Redux store update
      dispatch(storeMessage({ chatID, message }));

      // Socket.IO function to send input to server
      sendInputToServer(message, chatID); // Send the input to the server
      setInputText("");
      // dispatch(storeResponse(data));
    } else {
      console.log("Input is empty");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      // Handle the enter key press
      sendInput();
      setInputText("");
    }
  };

  return (
    <div className="chat_box_panel">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Ask AI anything..."
        className="chat_box_input"
      />
    </div>
  );
}
