import React from "react";
import DetailController from "./detail/detail-controller";
import "../style/biography.css";
import NavigationController from "./navigation/navigation-controller";
import jobContent from "../content/job";
import educationContent from "../content/education";
import { useTranslation } from "react-i18next";

/** @todo: add hover helper (show info message about hovered text) + grey color */
export const BiographyController = () => {
  const { t } = useTranslation();

  const jobs = jobContent(t);
  const courses = educationContent(t);

  return <div className="controller">
    <div className="container">
      <NavigationController jobs={ jobs } courses={ courses }/>
      <DetailController jobs={ jobs } courses={ courses }/>
    </div>
  </div>;
};
