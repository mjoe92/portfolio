import React from "react";
import {Project} from "../content/project/project";

interface Props {
  project: Project;
}

export const ProjectCard: React.FC<Props> = ({project}) => {
  const placeholder = "https://placehold.co/220x140/4b4b4b/cacaca?text=Preview";
  const imageUrl = project.snapshotUrl || placeholder;

  const cardContent = (
    <>
      <div className="project-card-snapshot">
        <img src={imageUrl} alt={project.title + " preview"}/>
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        {project.tags && (
          <div className="project-card-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  return project.link ? (
    <a href={project.link} target="_blank" rel="noreferrer" className="project-card-link">
      <div className="project-card">{cardContent}</div>
    </a>
  ) : (
    <div className="project-card">{cardContent}</div>
  );
};
