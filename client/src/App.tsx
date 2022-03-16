import './App.css';
// import UserComponent from './component/user/UserComponent';
import { Header, Footer } from './component/semantic/Semantic';

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="container">
        <UserComponent />
      </div> */}
      <Footer />
    </div>
  );
}