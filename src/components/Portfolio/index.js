import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

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
                        I am a passionate frontend developer with 2 years of experience in the field. I specialize in creating dynamic and responsive user interfaces using technologies such as React, Bootstrap, HTML, CSS, JavaScript, Material UI, and jQuery. I am dedicated to delivering high-quality code and creating engaging web experiences.
                    </p>
                    <p>
                        In addition to my technical skills, I have a strong eye for design and a deep understanding of user experience principles. I am constantly staying updated with the latest industry trends and technologies to ensure that I am delivering modern and cutting-edge solutions.
                    </p>
                    <p>
                        I am always excited to take on new challenges and contribute my expertise to create exceptional web experiences. Feel free to explore my portfolio to see some of the projects I have worked on. If you have any questions or would like to discuss a potential collaboration, please don't hesitate to get in touch.
                    </p>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;