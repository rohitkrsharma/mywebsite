import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="white" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="white" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="white" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="white" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="green"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/rohit-sharma8986/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rohitkrsharma"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCubJC54sfBvLJSc2jnloblQ"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="white"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="green"
        size="3x"
        className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
