import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import NotFoundPage from "./components/notfound";
import Dashboard from "./components/dashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Dashboard/> */}
    {/* <NotFoundPage/> */}
  </StrictMode>
);
