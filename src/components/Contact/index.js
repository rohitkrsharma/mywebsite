import { faCss3, faGitAlt, faHtml5, faJira, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am open to collaborating on a wide range of projects, from modern and responsive websites to feature-rich web applications. Whether you need a sleek portfolio, an e-commerce platform, or a custom web solution, I am here to bring your vision to life with a reliable and innovative approach.
          </p>
          <p>
            Feel free to reach out for any inquiries, project discussions, or collaborations. I am dedicated to delivering exceptional results tailored to your needs. Let’s create something remarkable together!
          </p>
          <h2 className='hstyle'>
            Email:- <a className='emailstyle' href="mailto:rohtmystic@gmail.com">rohtmystic@gmail.com</a>
          </h2>
          <h2 className='hstyle'>
            Phone:- <a className='emailstyle' href="tel:+91-8083223791">+91-7903945913</a>
          </h2>
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

export default Contact
