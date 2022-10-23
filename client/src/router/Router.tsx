// import UserComponent from './component/user/UserComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/background.css";
import BiographyController from "../component/pages/biography/controller/BiographyController";
import { ErrorController } from "../component/pages/mismatch/ErrorController";
import { Header } from "../component/semantic/header/Header";
import { Footer } from "../component/semantic/footer/Footer";
import HomeController from "../component/pages/home/controller/HomeController";
// import Test from "../component/pages/test/Test";
import { EPageFragment } from "./EPageFragment";

export const Router = () => {
  return (
    <div className="background">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={EPageFragment.HOME} element={<HomeController />} />
          <Route path={EPageFragment.BIO} element={<BiographyController />} />
          <Route path={EPageFragment.ERR} element={<ErrorController />} />
          {/* <Route path={EPageFragment.TEST} element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
