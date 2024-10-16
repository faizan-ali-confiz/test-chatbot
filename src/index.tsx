import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ChatWidget from "./Components/chatWidget";

const root = ReactDOM.createRoot(
  document.getElementById("gatsby-chat-widget") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Expose the ChatWidget globally
window.ChatWidget = (elementId: string) => {
  const el = document.getElementById(elementId);
  if (el) {
    const root = ReactDOM.createRoot(el);
    root.render(<ChatWidget />);
  } else {
    console.error(`Element with ID '${elementId}' not found.`);
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
