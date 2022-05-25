import { Component } from "react";

import "../style/home.css";

export default class HomeController extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="controller">
        <div className="container">
          <p>It works!!!</p>
        </div>
      </div>
    );
  }
}
