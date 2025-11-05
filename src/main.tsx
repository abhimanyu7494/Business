// src/main.js or src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Vite automatically resolves .js/.jsx/.ts/.tsx

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
