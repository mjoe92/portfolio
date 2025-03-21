import React from "react";
import DetailController from "./detail/detail-controller";
import "../style/biography.css";
import NavigationController from "./navigation/navigation-controller";

/** @todo: add hover helper (show info message about hovered text) + grey color */
export const BiographyController = () => <div className="controller">
  <div className="container">
    <NavigationController/>
    <DetailController/>
  </div>
</div>;
