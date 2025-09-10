import { useState } from "react";
import { IoCloseCircle, IoMenu } from "react-icons/io5";

export default function SidePanel() {
  const [openNav, setOpenNav] = useState(false);
  const toggelNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="chat_box_panel">
      <></>
      <button className="openbtn" onClick={toggelNav}>
        <IoMenu />
      </button>

      <div id="mySidenav" className={`sidepanel ${openNav ? "active" : ""}`}>
        <span className="closebtn" onClick={toggelNav}>
          x
        </span>
        <div>
          <ul>
            <li>
              Item 1
              <span
                className="deleteBtn"
                onClick={() => alert("Delete Item 1")}
              >
                <IoCloseCircle />
              </span>
            </li>
          </ul>
        </div>
        <div className="new-chat-button" onClick={() => alert("New Chat")}>
          New chat
        </div>
      </div>
    </div>
  );
}
