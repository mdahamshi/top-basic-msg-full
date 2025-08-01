import React from "react";
import { format } from "date-fns";

const getInitials = (name) => name.charAt(0).toUpperCase();

const MessageBubble = ({ username, text, timestamp, avatarColor = "#6C63FF" }) => {
  return (
    <div className="flex items-start gap-3 py-2">
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: avatarColor }}
      >
        {getInitials(username)}
      </div>

      {/* Message content */}
      <div>
        {/* Name + Timestamp */}
        <div className="text-white text-sm font-semibold">
          {username}
          <span className="ml-2 text-xs text-gray-400">
            {format(new Date(timestamp), "PPP, p")}
          </span>
        </div>

        {/* Bubble */}
        <div className="bg-primary   text-white  px-4 py-2 rounded-xl mt-1 inline-block max-w-xs">
          {text}
        </div>

        {/* Status */}
        <div className="text-xs text-gray-500 mt-1">Delivered</div>
      </div>
    </div>
  );
};

export default MessageBubble;
