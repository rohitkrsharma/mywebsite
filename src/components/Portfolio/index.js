import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJira, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1 >
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Portfolio".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am an ambitious front-end developer seeking a position in a reputable IT company where I can contribute my skills and work with cutting-edge technologies on exciting and varied projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        In summary, I am a dedicated front-end developer with a strong passion for personal growth and a well-rounded lifestyle encompassing family, sports, photography, and technology.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJira} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;