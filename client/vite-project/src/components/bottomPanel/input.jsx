import React from "react";

export default function ChatInput() {
  return (
    <div className="chat_box_panel">
      <input
        type="text"
        value=""
        onChange={() => {}}
        placeholder="Ask AI anything..."
        className="chat_box_input"
      />
    </div>
  );
}
