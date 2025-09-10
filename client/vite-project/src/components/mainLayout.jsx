import React from "react";
import ChatPanel from "./chat/ChatPanel";
import ChatInput from "./bottomPanel/input";
import SidePanel from "./chat/SidePanel";

export default function Main() {
  return (
    <div className="--dark-theme" id="chat">
      <div className="chat_box">
        <ChatPanel />
      </div>
      <div className="chat_panel">
        <ChatInput />
      </div>
      <div className="side_panel">
        <SidePanel />
      </div>
    </div>
  );
}
