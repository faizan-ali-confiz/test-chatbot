import React, { useState } from "react";
import { FaComment, FaTimes, FaPaperPlane } from "react-icons/fa"; // Importing lightweight icons
import "./chatWidget.css";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputMessage, type: "self" },
    ]);
    setInputMessage("");

    // Simulating bot response after 1 second
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, type: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div>
      {/* Chat Trigger Button */}
      <div id="chat-circle" className="btn btn-raised" onClick={toggleChat}>
        <div id="chat-overlay"></div>
        <FaComment size={30} />
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-box">
          <ChatBoxHeader toggleChat={toggleChat} />
          <ChatBoxBody messages={messages} />
          <ChatBoxFooter
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSendMessage={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
};

const ChatBoxHeader = ({ toggleChat }) => (
  <div className="chat-box-header">
    ChatBot
    <span className="chat-box-toggle" onClick={toggleChat}>
      <FaTimes size={20} />
    </span>
  </div>
);

const ChatBoxBody = ({ messages }) => (
  <div className="chat-box-body">
    <div className="chat-logs">
      {messages.map((msg, index) => (
        <div key={index} className={`chat-msg ${msg.type}`}>
          <span className="msg-avatar">
            {/* <img
              src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745"
              alt="Avatar"
            /> */}
          </span>
          <div className="cm-msg-text">{msg.text}</div>
        </div>
      ))}
    </div>
  </div>
);

const ChatBoxFooter = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) => (
  <div className="chat-input">
    <form onSubmit={handleSendMessage} className="chat-input">
      <div className="input-container">
        <input
          type="text"
          placeholder="Send a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="chat-input-field"
        />
        <button type="submit" className="chat-submit">
          <FaPaperPlane size={20} />
        </button>
      </div>
    </form>
  </div>
);

export default ChatWidget;
