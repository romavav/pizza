import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./components/redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
);
