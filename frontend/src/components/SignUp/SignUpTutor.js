import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input/input'

class SignUpTutor extends Component {
  state = {
    id: '',
    password: '',
    password_confimation: '',
    certificate: null,
    phone: '',
    isAuthorized: false
  };

  handleFileUpload = (event) => {
    const formData = new FormData();
    formData.append('file',  event.target.files[0]);

    this.setState({isAuthorized: true})
  };

  render() {
    
    let message = '';
    if (this.state.isAuthorized) {
      message = 'Your certified has been authorized!'
    }

    return (
      <div className="signuptutor-div">
        <div className="signuptutor-div-input">
          <label className="signuptutor-label-id">ID</label>
          <input
            type="text"
            className="signuptutor-input-id"
            onChange={(event) => this.setState({ id: event.target.value })}
          />
          <label className="signuptutor-label-password">Password</label>
          <input
            type="password"
            className="signuptutor-input-password"
            onChange={(event) => this.setState({ password: event.target.value })}
          />
          <label className="signuptutor-label-password">Password Confimation</label>
          <input
            type="password"
            className="signuptutor-input-password-confimation"
            onChange={(event) => this.setState({ password_confimation: event.target.value })}
          />
          <label>
          Phone number
          <PhoneInput
            country="KR"
            value={this.state.phone}
            onChange={value => this.setState({ phone: value })}
          />
        </label>          
          <div className="signuptutor-div-authorize">
            <label className="signuptutor-label-certificate">Certificate</label>
            <input type="file" className="signuptutor-input-certificate"
              onChange={event => this.handleFileUpload(event)} />
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpTutor;
