import {Component} from 'react'
import LightDarkMode from './components/LightDarkMode'

import './App.css'

class App extends Component {
  state = {
    isDarkModeEnabled: true,
    buttonText: 'Light Mode',
  }

  onClickLightMode = () => {
    this.setState(prevState => ({
      isDarkModeEnabled: false,
      buttonText: 'Dark Mode',
    }))
  }

  onClickDarkMode = () => {
    this.setState(prevState => ({
      isDarkModeEnabled: true,
      buttonText: 'Light Mode',
    }))
  }

  render() {
    const {isDarkModeEnabled, buttonText} = this.state
    let classNameOfContainer = null

    if (isDarkModeEnabled === true) {
      classNameOfContainer = 'dark-container'
    } else {
      classNameOfContainer = 'light-container'
    }

    return (
      <div className="background-container">
        <div className={classNameOfContainer}>
          <LightDarkMode />
          {isDarkModeEnabled && (
            <button type="button" onClick={this.onClickLightMode}>
              {buttonText}
            </button>
          )}
          {!isDarkModeEnabled && (
            <button type="button" onClick={this.onClickDarkMode}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default App
