import { ProjectCard } from "../component/project-card";
import { createProjects } from "../content/project/project-factory";
import "../style/projects.css";

export const ProjectController = () => {
  const projects = createProjects();

  if (!projects.length) {
    return (
      <div className="projects-status">
        No projects found.
      </div>
    );
  }

  return (
    <div className="controller">
      <div className="container projects-container">
        { projects.map((project) => (
          <ProjectCard
            key={ project.id }
            project={ project }
          />
        )) }
      </div>
    </div>
  );
};
