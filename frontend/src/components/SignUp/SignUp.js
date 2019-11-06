import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="content">Are you a tutee, or a tutor?
        <br/>
        <button type="button" onClick={() => this.props.history.push('/signup/tutor/')}>Tutor</button>
        <button type="button" onClick={() => this.props.history.push('/signup/tutee/')}>Tutee</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
