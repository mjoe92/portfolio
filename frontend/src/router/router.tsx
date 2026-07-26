import { PageFragment } from "./page-fragment";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../component/semantic/header/header";
import { Footer } from "../component/semantic/footer/footer";
import './style/router.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BiographyController } from "../component/pages/biography/controller/biography-controller";
import { ProjectController } from "../component/pages/projects/controller/project-controller";

export const Router = () => {
  return (
    <div className="background page-transition">
      <BrowserRouter basename={ PageFragment.BASE }>
        <Header/>
        <main>
          <Routes>
            <Route index element={ <BiographyController/> }/>
            <Route path={ PageFragment.PROJECTS } element={ <ProjectController/> }/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
