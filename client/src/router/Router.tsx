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
import Test from "../component/pages/test/Test";
import { PageFragment } from "./EPageFragment"

export const Router: FC = () => {
  return (
    <div className="background">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={PageFragment.HOME} element={<HomeController />} />
          <Route path={PageFragment.BIO} element={<BiographyController />} />
          <Route path={PageFragment.ERROR} element={<ErrorController />} />
          <Route path={PageFragment.TEST} element={<Test />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
