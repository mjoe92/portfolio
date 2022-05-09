import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./main/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoMatch } from "./component/pages/mismatch/Mismatch";
import { Header } from "./component/semantic/header/Header";
import BiographyController from "./component/pages/biography/ContainerController";
import { Footer } from "./component/semantic/footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="header" element={<Header />} />
        <Route path="footer" element={<Footer />} />
        <Route path="test" element={<BiographyController />} />
        <Route path="biography" element={<BiographyController />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
