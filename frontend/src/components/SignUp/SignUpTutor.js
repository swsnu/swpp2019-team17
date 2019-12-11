import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';

import PhoneInput from 'react-phone-number-input/input'
import Select from 'react-select'
import AvailableTimes from 'react-available-times'
import './SignUpTutor.css';
import Address from '../Address/address';
import * as actioncreators from '../../redux/signup';
import Certificate from '../Certificate/Certificate';
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
    phone: '',
    isAuthorized: false,
    age: '',
    subject: [],
    university: '',
    address: [],
    schedule: [],
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
    let tutor = {}
    tutor['username'] = this.state.id;
    tutor['password'] = this.state.password;
    tutor['name'] = this.state.name;
    tutor['phonenumber'] = this.state.phone;
    tutor['age'] = this.state.age;
    tutor['subject'] = this.state.subject[0].value;
    tutor['gender'] = this.state.gender;
    tutor['schedule'] = this.state.schedule;
    tutor = JSON.stringify(tutor)
    console.log(tutor);
    actioncreators.signUpTutor(tutor);
    this.props.history.push('/profile/tutor/')
  }
  inputSchedule = (e) => {
    this.setState({ schedule : e })
  }
  inputAddress = (address, index) => {
    var arr = this.state.address;
    arr[index] = address
    this.setState({ address: arr})
  }
  selectAddress = (index, address) => {
    var arr = this.state.address;
    arr[index] = address;
    console.log(address)
    this.setState({address: arr})
    console.log(this.state.address)
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
    var index = -2;
    const addressInput = this.state.schedule.map((x) => {
      var dayReg = /^([A-Za-z]{3})/g
      var timeReg = /([0-9]{2}:[0-9]{2})/g;
      var timeReg2 = /([0-9]{2}:[0-9]{2})/g;
      let start = x.start.toString()
      let end = x.end.toString()
      let Day = dayReg.exec(start)[1]
      let startTime = timeReg.exec(start)[1]
      let endTime = timeReg2.exec(end)[1]
      index += 2;
      // 정렬이 요일 안에서는 생성순으로 만들어짐. 
      // 소트를 돌려서 거기서 생성한 후 signup 할때도 맞춰서
      // 요일별로 address 생성 
      return(
        <div key={index+0.5}>
          <div key={index+0.3}>{Day}{startTime}~{endTime}</div>
          <Address key={index} id={index} index={index} onSelectAddress={this.selectAddress}/>
          <Address key={index+1} id={index+1} index={index+1} onSelectAddress={this.selectAddress}/>
        </div>
      )
    })
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
              Phone number
              <PhoneInput
                className="phoneinput"
                country="KR"
                value={this.state.phone}
                onChange={value => this.setState({ phone: value })}
              />
            </label>
              Gender
              <Select options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}></Select>
            <label>
              Age
            <Form.Control></Form.Control>
            </label>
            <label className="subject-label">
              Subject
              <div className='select'>
                <Select options={options} closeMenuOnSelect={false} isMulti={true} onChange={(selectedoptions) => this.ChangeSubject(selectedoptions)} />
              </div>
            </label>
            <Button onClick={() => this.setState({ step: this.state.step + 1 })}>Next</Button>
          </div>
        break;
      case 3:
        input =
          <div className="timetable">
            <AvailableTimes height={1000} onChange={(e) => this.inputSchedule(e)} />
            <div>{addressInput}</div>
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

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpTutor);
