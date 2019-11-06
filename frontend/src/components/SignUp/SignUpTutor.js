import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input/input'
import Select from 'react-select'
import AvailableTimes from 'react-available-times'
import './SignUpTutor.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SignUpTutor extends Component {
  state = {
    id: '',
    password: '',
    password_confimation: '',
    name: '',
    certificate: null,
    phone: '',
    isAuthorized: false,
    subject: [],
    university: '',
  };

  handleFileUpload = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    this.setState({ isAuthorized: true })
  };

  ChangeSubject = (subject) => {
    this.setState({ subject: subject })
  }
  ChangeUniversity = (university) => {
    this.setState({ university: university })
  }

  ClickConfirm = () => {
    this.props.history.push('/profile/tutor/')
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
      { value: 'social study', label: 'Social Study' },
    ]
    const university_options = [
      { value: 'SNU', label: 'SNU' },
      { value: 'Yonsei', label: 'Yonsei' },
      { value: 'Korea', label: 'Korea' },
      { value: 'Kaist', label: 'Kaist' },
      { value: 'Postech', label: 'Postech' },
    ]
    return (
      <div className="signuptutor-div">
        <div className="signuptutor-div-input">
          <div className="signuptutor-label-id">ID:
          <Form.Control
              type="text"
              className="signuptutor-input-id"
              onChange={(event) => this.setState({ id: event.target.value })}
            />
          </div>
          <div className="signuptutor-label-password">Password:
          <Form.Control
              type="password"
              className="signuptutor-input-password"
              onChange={(event) => this.setState({ password: event.target.value })}
            />
          </div>
          <div className="signuptutor-label-password">Password Confimation:
          <Form.Control
              type="password"
              className="signuptutor-input-password-confimation"
              onChange={(event) => this.setState({ password_confimation: event.target.value })}
            />
          </div>
          <label>
            Name:
            <Form.Control onChange={(e) => this.setState({ name: e.target.value })}></Form.Control>
          </label>
          <br/>
          <label>
            Phone number:
          <PhoneInput
              country="KR"
              value={this.state.phone}
              onChange={value => this.setState({ phone: value })}
            />
          </label>
          <br/>
          <div className="gender">Gender:
            <Select options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}></Select>
          </div>
          <label className="signuptutor-label-certificate">Photo:</label>
            <Form.Control type="file" className="signuptutor-input-certificate"/>
            <div className="signuptutor-div-authorize">
            <label className="signuptutor-label-certificate">Certificate:</label>
            <Form.Control type="file" className="signuptutor-input-certificate"
              onChange={event => this.handleFileUpload(event)} />
            <p>{message}</p>
          </div>
          <label>
            Age:
          <Form.Control></Form.Control>
          </label>
          <br/>
          <div className='university'>university
          <Select options={university_options} closeMenuOnSelect={true} onChange={(selectedoption) => this.ChangeUniversity(selectedoption)} />
          </div>
          <label className="subject-label">
            subject
            <div className='select'>
              <Select options={options} closeMenuOnSelect={false} isMulti={true} onChange={(selectedoptions) => this.ChangeSubject(selectedoptions)} />
            </div>
          </label>
          <div className="timetable">
            <AvailableTimes height={600} />
          </div>
          <Button onClick={this.ClickConfirm}>Confirm</Button>
        </div>
      </div>
    );
  }
}

export default SignUpTutor;
