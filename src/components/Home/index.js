import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme ? 'home-text-dark' : ''

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : ''

      return (
        <div className={`home-bg-cont ${homeBgClassName}`}>
          <Navbar />
          <div className="home-cont">
            <img className="home-img" src={homeImgSrc} alt="home" />
            <h1 className={`home-h1 ${homeTextClassName}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
