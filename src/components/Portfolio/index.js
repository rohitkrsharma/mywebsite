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
                        I am an ambitious front-end developer eager to secure a position in a dynamic IT company where I can contribute my expertise and collaborate on innovative projects using cutting-edge technologies.
                    </p>
                    <p align="LEFT">
                        With a strong foundation in web development, I am naturally curious, constantly honing my skills, and tackling design challenges one problem at a time. My journey has been enriched by creating impactful projects such as Tekprowess, a professional tech company website; a stunning wedding invitation site; a user-friendly medical services platform; Marc2Digital, a sleek digital marketing website; and Digifalak, a comprehensive web development and digital marketing platform. Each of these projects showcases my proficiency with React, Tailwind CSS, Bootstrap, and Node.js, along with my ability to deliver results-driven solutions.
                    </p>
                    <p>
                        In summary, I am a dedicated front-end developer with a strong passion for personal growth and a balanced lifestyle that includes family, sports, photography, and technology. My diverse portfolio reflects my commitment to excellence and my drive to make meaningful contributions to every project I undertake.
                    </p>

                </div>

            </div>

            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;