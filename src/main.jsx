import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import AuthPage from "./pages/AuthPage/AuthPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import { HashRouter, BrowserRouter } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
