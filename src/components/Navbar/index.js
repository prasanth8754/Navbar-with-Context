import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      const webLogoSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLogoSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const routeLinkClassName = isDarkTheme ? 'route-link-dark' : ''

      const navbarClassName = isDarkTheme ? 'navbar-dark' : ''

      return (
        <nav className={`navbar ${navbarClassName}`}>
          <img className="website-logo" src={webLogoSrc} alt="website logo" />
          <ul className="header-ul-cont">
            <li className="header-link">
              <Link to="/" className={`route-link ${routeLinkClassName}`}>
                Home
              </Link>
            </li>
            <li className="header-link">
              <Link to="/about" className={`route-link ${routeLinkClassName}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            className="theme-btn"
            type="button"
            data-testid="theme"
            onClick={changeTheme}
          >
            <img className="website-logo" src={themeLogoSrc} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
