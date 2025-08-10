import { StrictMode, useEffect } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WebApp from "./components/WebSite/WebApp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <WebApp/> */}
  </StrictMode>
   )

