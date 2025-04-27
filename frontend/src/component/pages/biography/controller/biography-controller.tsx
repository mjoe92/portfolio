import React from "react";
import DetailController from "./detail/detail-controller";
import "../style/biography.css";
import NavigationController from "./navigation/navigation-controller";
import jobContent from "../content/job";
import educationContent from "../content/education";

/** @todo: add hover helper (show info message about hovered text) + grey color */
export const BiographyController = () => {
  const jobs = jobContent();
  const courses = educationContent();

  return <div className="controller">
    <div className="container">
      <NavigationController jobs={ jobs } courses={ courses }/>
      <DetailController jobs={ jobs } courses={ courses }/>
    </div>
  </div>;
};
