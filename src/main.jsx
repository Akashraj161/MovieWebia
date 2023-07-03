import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// Redux(store) connection to React
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
