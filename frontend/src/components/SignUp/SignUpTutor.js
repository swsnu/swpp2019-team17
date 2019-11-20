import React, { Component } from 'react';
import PhoneInput from 'react-phone-number-input/input'
import Select from 'react-select'
import AvailableTimes from 'react-available-times'
import './SignUpTutor.css';
import Address from '../Address/address';
// bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

class SignUpTutor extends Component {
  state = {
    step: 0,
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
    const university_options = [
      { value: 'SNU', label: 'SNU' },
      { value: 'Yonsei', label: 'Yonsei' },
      { value: 'Korea', label: 'Korea' },
      { value: 'Kaist', label: 'Kaist' },
      { value: 'Postech', label: 'Postech' },
    ]
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
    let input = <div></div>
    switch (this.state.step) {
      case 0:
        input =
          <div>
            <Form.Group className="signuptutor-label-id">ID:
          <Form.Control
                type="text"
                className="text-left"
                onChange={(event) => this.setState({ id: event.target.value })}
              />
            </Form.Group>
            <div className="signuptutor-label-password">Password:
          <Form.Control
                type="password"
                className="text-left"
                onChange={(event) => this.setState({ password: event.target.value })}
              />
            </div>
            <div className="signuptutor-label-password">Password Confimation:
          <Form.Control
                type="password"
                className="text-left"
                onChange={(event) => this.setState({ password_confimation: event.target.value })}
              />
            </div>
            <Button onClick={() => this.setState({ step: this.state.step + 1 })}>Next</Button>
          </div>
        break;
      case 1:
        input =
          <div>
            <label className="signuptutor-label-certificate">Photo:</label>
            <Form.Control type="file" className="signuptutor-input-certificate" />
            <div className="signuptutor-div-authorize">
              <label className="signuptutor-label-certificate">Certificate:</label>
              <Form.Control type="file" className="signuptutor-input-certificate"
                onChange={event => this.handleFileUpload(event)} />
            </div>
            <div className='university'>university
          <Select options={university_options} closeMenuOnSelect={true} onChange={(selectedoption) => this.ChangeUniversity(selectedoption)} />
            </div>
            <Button onClick={() => this.setState({ step: this.state.step + 1 })}>Next</Button>
          </div>
        break;
      case 2:
        input =
          <div>
            <label>
              Phone number:
          <PhoneInput
                className="phoneinput"
                country="KR"
                value={this.state.phone}
                onChange={value => this.setState({ phone: value })}
              />
            </label>
            <div className="gender">Gender:
            <Select options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}></Select>
            </div>
            <label>
              Age:
          <Form.Control></Form.Control>
            </label>
            <Button onClick={() => this.setState({ step: this.state.step + 1 })}>Next</Button>
          </div>
        break;
      case 3:
        input = <label className="subject-label">
          subject
        <div className='select'>
            <Select options={options} closeMenuOnSelect={false} isMulti={true} onChange={(selectedoptions) => this.ChangeSubject(selectedoptions)} />
          </div>
          <Button onClick={() => this.setState({ step: this.state.step + 1 })}>Next</Button>
        </label>
        break;
      case 4:
        input =
          <div className="timetable">
            <Address />
            <AvailableTimes height={1000} />
            <Button onClick={this.ClickConfirm}>Confirm</Button>
          </div>
        break;
    }

    return (
      <Jumbotron>
        {input}
      </Jumbotron>
    );
  }
}

export default SignUpTutor;
