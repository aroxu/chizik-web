import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ToS from "./policy/tos";
import Privacy from "./policy/privacy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/chizik-web">
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
        <Route path="/policy/tos" element={<ToS />}></Route>
        <Route path="/policy/privacy" element={<Privacy />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
