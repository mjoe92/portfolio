import { Component } from "react";

import DetailController from "./detail-controller";
import NavigationController from "./navigation-controller";

import "../style/biography.css";

/** @todo: add hover helper (show info message about hovered text) + grey color */
export default class BiographyController extends Component {
  render() {
    return (
      <div className="controller">
        <div className="container">
          <NavigationController />
          <DetailController />
        </div>
      </div>
    );
  }
}
