import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';

import PhoneInput from 'react-phone-number-input/input';
import Select from 'react-select';
import AvailableTimes from 'react-available-times';
import './SignUpTutor.css';
import Address from '../Address/address';
import Certificate from '../Certificate/Certificate';
// bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

class SignUpTutor extends Component {
  state = {
    id: '',
    password: '',
    password_confimation: '',
    name: '',
    phone: '',
    subject: [],
    university: '',
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
      <Jumbotron>
      <div className="signuptutor-div">
        <div className="signuptutor-div-input">
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
          <label>
            Name:
            <Form.Control className="text-left" onChange={(e) => this.setState({ name: e.target.value })}></Form.Control>
          </label>
          <br/>
          <label>
            Phone number:
          <PhoneInput
            className = "phoneinput"

              country="KR"
              value={this.state.phone}
              onChange={value => this.setState({ phone: value })}
            />
          </label>
          <br/>
          <div className="gender">Gender:
            <Select options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}></Select>
          </div>
          <label className="signuptutor-label-photo">Photo:</label>
            <Form.Control type="file" className="signuptutor-input-photo"/>
            <div className="signuptutor-div-authorize">
              <label className="signuptutor-label-certificate">Certificate:</label>
              <Certificate/>
            </div>
          <label>
            Age:
          <Form.Control></Form.Control>
          </label>
          <br/>
          <Address/>
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
            <AvailableTimes height={1000} />
          </div>
          <Button onClick={this.ClickConfirm}>Confirm</Button>
        </div>
      </div>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpTutor);
