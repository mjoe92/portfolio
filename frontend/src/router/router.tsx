// import UserComponent from './component/user/UserComponent';
import { PageFragment } from "./page-fragment";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../component/semantic/header/header";
import { Footer } from "../component/semantic/footer/footer";
import './style/router.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BiographyController } from "../component/pages/biography/controller/biography-controller";

export const Router = () => {
  return (
    <div className="background">
      <BrowserRouter basename={ PageFragment.BASE }>
        <Header/>
        <Routes>
          <Route index element={ <BiographyController/> }/>
          {/* <Route path={EPageFragment.HOME} element={<BiographyController />} /> */ }
          {/*
          <Route path={ EPageFragment.BIO } element={ <BiographyController/> }/>
          <Route path={ EPageFragment.ERR } element={ <ErrorController/> }/>
          <Route path={ EPageFragment.TEST } element={ <Test/> }/>
          */ }
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
