import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataFetchingContextProvider from "./Context/DataFetchingContext/DataFetchingContextProvider";
import SettingsContextProvider from "./Context/SettingsContext/ContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataFetchingContextProvider>
      <SettingsContextProvider>
        <App />
      </SettingsContextProvider>
    </DataFetchingContextProvider>
  </React.StrictMode>
);
