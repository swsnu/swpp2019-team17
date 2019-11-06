import React, { Component } from 'react';
import { connect } from 'react-redux';
import Address from '../Address/address';
import TuteeSignupForm from './TuteeSignupForm'
import PhoneInput from 'react-phone-number-input/input'
// import { TimeGridScheduler, classes } from '@remotelock/react-week-scheduler';
// import actionCreators from '../../redux';
import './SignUpTutee.css';

class SignUpTutee extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      password_confimation: '',
      phone: '',
      childList: [{ id: 0, name: '', subject: [] }], // [{id:1, name: jack, ...}, {id: 2, name: park, ...}, ...]
      childID: 0,
    }
  }

  addChild = () => {
    const newChild = {
      id: this.state.childID + 1,
      name: '',
      subject: [],
    }
    this.setState({ childList: this.state.childList.concat(newChild), childID: this.state.childID + 1 })
  }

  ChangeName = (name, index) => {
    const copyState = this.state.childList;
    copyState[index].name = name;
    this.setState({ childList: copyState })
  }

  ChangeSubject = (subject, index) => {
    const copyState = this.state.childList;
    copyState[index].subject = subject;
    this.setState({ childList: copyState })
  }

  Delete = (index) => {
    const copyState = this.state.childList;
    copyState.splice(index, 1)
    this.setState({ childList: copyState })
  }

  ClickConfirm = () => {
    this.props.history.push('/tutee/match/')
  }
  render() {
    let index = -1;
    const tuteeSignupForms = this.state.childList.map((key) => { // key = {id: , name: ...}
      index += 1;
      return (
        <TuteeSignupForm
          key={index}
          id={index}
          name={this.state.childList[index].name}
          onChangeName={this.ChangeName}
          subject={this.state.childList[index].subject}
          onChangeSubject={this.ChangeSubject}
          onClickDelete={this.Delete}
        />
      );
    });

    return (
      <div>
        <div className="id">
          ID:
          <input
            className="id-input"
            onChange={(e) => this.setState({ id: e.target.value })}
            value={this.state.id}
          />
        </div>
        <div className="password">
          Password:
          <input
            type="password"
            className="password-input"
            onChange={(e) => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
        </div>
        <div className="password-confirmation">
          Password Confirmation:
          <input
            type="password"
            className="password-confirmation-input"
            onChange={(e) => this.setState({ password_confimation: e.target.value })}
            value={this.state.password_confimation}
          />
        </div>
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
        <Address />
        <div className="child-list-container-div">
          {tuteeSignupForms}
          <button type="button" onClick={() => this.addChild()}>Add</button>
          <button type="button" onClick={this.ClickConfirm}>Confirm</button>
        </div>
        {/* <TimeGridScheduler classes={classes} {...otherProps} /> */}
      </div>
    );
  }
}

export default SignUpTutee
/*
const mapStateToProps = state => {
  return {
    storedLogIn: state.login.logged
  };
};

const mapDispatchToProps = dispatch => {
  return {
      signUp: (session) => dispatch(actionCreators.sign(session)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpTutee);
*/
