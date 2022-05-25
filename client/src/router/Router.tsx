// import UserComponent from './component/user/UserComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/background.css";
import BiographyController from "../component/pages/biography/controller/BiographyController";
import { ErrorController } from "../component/pages/mismatch/ErrorController";
import { Header } from "../component/semantic/header/Header";
import { Footer } from "../component/semantic/footer/Footer";
import { FC } from "react";
import HomeController from "../component/pages/home/controller/HomeController";

export const Router: FC = () => {
  return (
    <div className="background">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<HomeController />} />
          <Route path="test" element={<BiographyController />} />
          <Route path="*" element={<ErrorController />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
