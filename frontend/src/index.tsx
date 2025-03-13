import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./router/router";

import "./i18n/config";
import i18n from "./i18n/config";
import { I18nextProvider } from "react-i18next";

const container: HTMLElement | null = document.getElementById("root");
const root: ReactDOM.Root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
