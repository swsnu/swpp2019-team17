import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div className="login">
        <div className="login">
          <label>ID</label>
          <input
            id="id-input"
            type="text"
            value={this.state.username}
            onChange={(event) => { this.setState({ username: event.target.value }) }}
          />
          <br />
          <label>password</label>
          <input
            id="pw-input"
            type="password"
            value={this.state.password}
            onChange={(event) => { this.setState({ password: event.target.value }) }}
          />
          <br />
        </div>
        <div id="buttons">
          <button id="login-button" onClick={() => this.loginHandler()}>Sign in</button>
          <button id="signup-button" onClick={() => this.props.history.push('/signup/')}>Sign up</button>
        </div>
      </div>
    )
  }
}
export default Login;
