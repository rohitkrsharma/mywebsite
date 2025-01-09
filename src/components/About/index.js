import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJira,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a passionate frontend developer with over 2+ years of experience in the field. I specialize in building dynamic, responsive, and user-friendly web interfaces using technologies such as <strong>React, Tailwind CSS, Bootstrap, HTML, CSS, JavaScript, Material UI, and jQuery. My expertise also extends to backend technologies like Node.js, Express, MongoDB, and SQL,</strong> allowing me to contribute to full-stack development projects.
          </p>
          <p>
            With a keen eye for design and a solid understanding of user experience principles, I strive to deliver high-quality code and create engaging, modern web experiences. I stay updated with the latest industry trends and technologies, including AWS, Git, GitHub, and deployment platforms like Vercel, ensuring that I provide cutting-edge solutions tailored to client needs.
          </p>
          <p>
            I am always eager to take on new challenges and leverage my expertise to develop exceptional web applications. My portfolio includes projects such as <strong>Tekprowess, Digifalak, Marc2Digital, a wedding invitation website, and a medical services platform,</strong> showcasing my versatility and dedication to excellence. Feel free to explore my portfolio, and don’t hesitate to reach out if you’d like to discuss a potential collaboration or have any questions.
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
  )
}

export default About
