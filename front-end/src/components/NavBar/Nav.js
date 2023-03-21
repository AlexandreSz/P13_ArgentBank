import './nav.css'
import Logo from '../../assets/images/argentBankLogo.png'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Features/userSlices'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {user ? (
          user.userProfile ? (
            <div className="login-block">
              <div className="login-user">
                <span className="sign-in-icon">
                  <FontAwesomeIcon icon={faCircleUser} />
                </span>
                {user.userProfile.firstName}
              </div>
              <div className="login-logout">
                <button
                  onClick={() => {
                    dispatch(logout())
                    ;<Navigate to="/" replace />
                  }}
                >
                  <FontAwesomeIcon icon={faSignOut} />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/login" className="main-nav-item">
                <span className="sign-in-icon">
                  <FontAwesomeIcon icon={faCircleUser} />
                </span>
                Sign In
              </Link>
            </div>
          )
        ) : (
          <div>
            <Link to="/login" className="main-nav-item">
              <span className="sign-in-icon">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav
