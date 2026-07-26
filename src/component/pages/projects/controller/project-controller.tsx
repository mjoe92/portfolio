import React, { useEffect, useState } from "react";
import { GithubRepo, mapRepoToProject } from "../model/project";
import { Project } from "../content/project/project";
import { getProjects } from "../content/project/project-factory";
import { ProjectCard } from "../component/project-card";
import "../style/projects.css";

export const ProjectController: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data/repos.json`)
            .then((res) => {
                if (!res.ok) throw new Error(`Status ${res.status}`);
                return res.json() as Promise<GithubRepo[]>;
            })
            .then((repos) => setProjects(repos.map(mapRepoToProject)))
            .catch(() => {
                // Local dev or fetch unavailable — use static factory data
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
