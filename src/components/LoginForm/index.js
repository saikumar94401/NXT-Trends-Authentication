import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess()
    } else {
      const errorMsg = `*${data.error_msg}`
      this.setState({errorMessage: errorMsg})
    }
    console.log(data)
    this.setState({username: '', password: ''})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-app-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-form-website-logo"
            />

            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-form-image"
            />

            <form className="form-container" onSubmit={this.submitForm}>
              <div className="form-input-container">
                <label className="form-label" htmlFor="username">
                  USERNAME
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.changeUsername}
                />
              </div>

              <div className="form-input-container">
                <label className="form-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  className="form-input"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.changePassword}
                />
              </div>
              <button className="form-login" type="submit">
                Login
              </button>
              <p className="error-message">{errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
