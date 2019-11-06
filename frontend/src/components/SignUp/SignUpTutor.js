import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input/input'
import Select from 'react-select'

class SignUpTutor extends Component {
  state = {
    id: '',
    password: '',
    password_confimation: '',
    certificate: null,
    phone: '',
    isAuthorized: false,
    subject: [],
  };

  handleFileUpload = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    this.setState({ isAuthorized: true })
  };

  ChangeSubject = (subject) => {
    this.setState({ subject: subject })
  }

  render() {
    let message = '';
    if (this.state.isAuthorized) {
      message = 'Your certified has been authorized!'
    }
    const options = [
      { value: 'korean', label: 'Korean' },
      { value: 'math', label: 'Math' },
      { value: 'english', label: 'English' },
      { value: 'science', label: 'Science' },
      { value: 'society', label: 'Society' },
    ]

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
          <label className="subject-label">
            subject
          <Select options={options} closeMenuOnSelect={false} isMulti={true} onChange={(selectedoptions) => this.ChangeSubject(selectedoptions)} />
          </label>
          <button>Confirm</button>
        </div>
      </div>
    );
  }
}

export default SignUpTutor;
