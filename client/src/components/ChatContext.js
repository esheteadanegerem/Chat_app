import React, { createContext, useContext, useEffect, useState } from "react";
import { socket } from "./Socket";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.connect();

    socket.on("chatMessage", (msg) => {
      setMessages((prev) => [...prev, msg]); // Add new messages to the list
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    socket.emit("chatMessage", message);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
