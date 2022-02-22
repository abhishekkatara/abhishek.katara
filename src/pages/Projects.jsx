import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ projects }) => {
    return (
        <div>
            <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">My projects</h1>
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
};

export default Projects;