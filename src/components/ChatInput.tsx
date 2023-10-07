"use client";

import React from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../../typing";

const ChatInput = () => {
  const [message, setMessage] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) return;
    const sentMessage = message;
    setMessage("");
    const id = uuid();
    const messageObj: Message = {
      id,
      message: sentMessage,
      createdAt: Date.now(),
      userName: "John Doe",
      profilePic: "https://i.pravatar.cc/300",
      email: "prajwalr.thedeveloper@gmail.com",
    };

    const uploadMessagetoUpstash = async () => {
      const response = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageObj),
      });
      const data = await response.json();
      console.log(
        "🚀 ~ file: ChatInput.tsx:33 ~ uploadMessagetoUpstah ~ data:",
        data
      );
    };
    uploadMessagetoUpstash();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!message}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
