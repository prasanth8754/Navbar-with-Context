import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeTextClassName = isDarkTheme ? 'home-text-dark' : ''

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : ''

      return (
        <div className={`home-bg-cont ${homeBgClassName}`}>
          <Navbar />
          <div className="home-cont">
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`home-h1 not-found-h1 ${homeTextClassName}`}>
              Lost Your Way?
            </h1>
            <p className={`not-found-p ${homeTextClassName}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
