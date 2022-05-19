import { Component } from "react";

import "../style/biography.css";
import DetailController from "./DetailController";
import NavigationController from "./NavigationController";

/** @todo: add hover helper (show info message about hovered text) + grey color */
export default class BiographyController extends Component {
  constructor(props: any) {
    super(props);
  }

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
