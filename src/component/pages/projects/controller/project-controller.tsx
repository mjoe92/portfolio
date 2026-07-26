import React, { useEffect, useState } from "react";
import { Project } from "../content/project/project";
import { getProjects } from "../content/project/project-factory";
import { ProjectCard } from "../component/project-card";
import "../style/projects.css";

const REPOS_DATA_URL =
    "https://raw.githubusercontent.com/mjoe92/portfolio/data/public/data/repos.json";

export const ProjectController: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(REPOS_DATA_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`Status ${res.status}`);
                return res.json() as Promise<Project[]>;
            })
            .then((data) => setProjects(data))
            .catch(() => {
                // data branch not yet created or local dev — fall back to static factory
                setProjects(getProjects());
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="controller">
                <div className="container projects-container projects-status">
                    <span>Loading projects...</span>
                </div>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="controller">
                <div className="container projects-container projects-status">
                    <span>No released projects yet.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="controller">
            <div className="container projects-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    );
};
