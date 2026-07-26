import React from "react";
import { ProjectCard } from "../component/project-card";
import "../style/projects.css";
import { getProjects } from "../../biography/content/project/project-factory";

export const ProjectController: React.FC = () => {
  return (
    <div className="controller">
      <div className="container projects-container">
        { getProjects().map((project) => (
          <ProjectCard key={ project.id } project={ project }/>
        )) }
      </div>
    </div>
  );
};
