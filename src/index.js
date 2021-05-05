import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RootStateProvider } from "./root-store/RootStateContext";

ReactDOM.render(
  <React.StrictMode>
    <RootStateProvider>
      <App />
    </RootStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
