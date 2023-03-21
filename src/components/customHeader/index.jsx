import React from "react";
import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function customHeader({ chat }) {
  return (
    <div className="chat-header">
      <div>
        <div className="flexbetween">
          <ChatBubbleLeftRightIcon className="icon-chat" />
          <h3 className="header-text">{chat?.title || chat?.id}</h3>
        </div>
        <div className="flexbetween">
          <PhoneIcon className="icon-phone" />
          <p className="header-text">
            {chat?.description !== "⬅️ ⬅️ ⬅️" ? (
              <p className="header-text">{chat?.description}</p>
            ) : (
              <p>no chat Selected</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
