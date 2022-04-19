import "./style/app.css";
// import UserComponent from './component/user/UserComponent';
import { Header } from "../component/semantic/header/Header";
import { Footer } from "../component/semantic/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ContainerController from "../component/biography/ContainerController";

export default function App() {
  return (
    <div className="background">
      <Header />
      <ContainerController />
      <Footer />
    </div>
  );
}
