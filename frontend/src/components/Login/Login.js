import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <div className='login'>
        <div className='login'>
          <label>email: </label>
          <input id='id-input' type='text' value={this.state.email}
            onChange={(event) => { this.setState({ email: event.target.value }) }} /><br />
          <label>password: </label>
          <input id='pw-input' type='password' value={this.state.password}
            onChange={(event) => { this.setState({ password: event.target.value }) }} /><br />
        </div>
        <div id='buttons'>
          <button id='login-button' onClick={() => this.loginHandler()}>log in</button>
          <button id='signup-button' onClick={() => this.props.history.push('/signup/')}>sign up</button>
        </div>
      </div>
    )
  }
}
export default Login;