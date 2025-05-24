// src/components/ChatBox.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";
import Header from "../components/Header";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("https://clippers.onrender.com/chat", {
        message: input,
      });

      const botMessage = {
        role: "assistant",
        content: res.data.response,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error talking to backend:", error);
    }

    setInput("");
  };

  // ChatBox.jsx
  return (
    <div>
      <Header hideImage={"true"} />
      <div className="chatbot-container">
        <h2 className="chatbot-title">Virtual Assistant</h2>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbot-message ${
                msg.role === "user" ? "user" : "assistant"
              }`}
            >
              <strong>{msg.role}:</strong> {msg.content}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
