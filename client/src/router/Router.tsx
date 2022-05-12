// import UserComponent from './component/user/UserComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import BiographyController from "../component/pages/biography/BiographyController";
import App from "../app/App";
import { MismatchController } from "../component/pages/mismatch/MismatchController";
import { Header } from "../component/semantic/header/Header";
import { Footer } from "../component/semantic/footer/Footer";

export default function Router() {
  return (
    <div className="background">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<App />} />
          <Route path="test" element={<BiographyController />} />
          <Route path="biography" element={<App />} />
          <Route path="*" element={<MismatchController />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
