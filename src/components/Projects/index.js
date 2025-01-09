import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import projectsData from "./projects.json";

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []);

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Projects".split("")}
                            idx={15}
                        />
                    </h1>
                    <div className="projects-grid">
                        {projectsData.map((project) => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card"
                            >
                                <div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    <div className="inner-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            </div>

            <Loader type="pacman" />
        </>
    );
};

export default Projects;
