// Write your code here

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <div>
          {isDarkTheme ? (
            <div className="nav-container color">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-list">
                <Link to="/" className="link">
                  <li className="link-item text-color">Home</li>
                </Link>
                <Link to="/about" className="link">
                  <li className="link-item text-color">About</li>
                </Link>
              </ul>

              <button
                type="button"
                className="theme-btn"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-logo"
                />
              </button>
            </div>
          ) : (
            <div className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="website-logo"
              />
              <ul className="nav-list">
                <Link to="/" className="link">
                  <li className="link-item">Home</li>
                </Link>
                <Link to="/about" className="link">
                  <li className="link-item">About</li>
                </Link>
              </ul>

              <button
                type="button"
                className="theme-btn"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-logo"
                />
              </button>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
