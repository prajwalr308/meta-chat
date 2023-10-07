import React from "react";

const MessageList = () => {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <div>message {i}</div>
      ))}
    </div>
  );
};

export default MessageList;
