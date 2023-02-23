import React from 'react'
import Logo from '../../assets/images/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <div className="navbar">
      <Link className="navbar__link" to="#">
        <img src={Logo} alt="Logo ArgentBank" className="navbar__logo" />
      </Link>
      <Link className="navbar__link__login" to="#">
        <FontAwesomeIcon icon={faUserCircle} />
        <span className="navbar__link__login__sign">Sign-in</span>
      </Link>
    </div>
  )
}

export default Nav
