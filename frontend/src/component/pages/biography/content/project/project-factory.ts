import projects from "./project-data.json";
import { Project } from "./project";

export const getProjects = (): Project[] => projects;