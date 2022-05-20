import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <Toaster
      reverseOrder={false}
      position="top-right"
      containerStyle={{ top: 50 }}
    />
  </BrowserRouter>

  // </React.StrictMode>
);
