import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/stor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
          <ToastContainer />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
