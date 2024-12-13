// import UserComponent from './component/user/UserComponent';
import { EPageFragment } from "./EPageFragment";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../component/semantic/header/Header";
import { Footer } from "../component/semantic/footer/Footer";
import BiographyController from "../component/pages/biography/controller/BiographyController";
import './style/router.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const Router = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<BiographyController />} />
          <Route path={EPageFragment.HOME} element={<BiographyController />} />
          {/*
          <Route path={ EPageFragment.BIO } element={ <BiographyController/> }/>
          <Route path={ EPageFragment.ERR } element={ <ErrorController/> }/>
          <Route path={ EPageFragment.TEST } element={ <Test/> }/>
          */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
