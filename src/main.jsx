import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MoneyState from "./context/MoneyState.jsx";
import TestState from "./context/TestState.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MoneyState>
        <TestState>
          <App />
        </TestState>
      </MoneyState>
    </BrowserRouter>
  </StrictMode>
);
