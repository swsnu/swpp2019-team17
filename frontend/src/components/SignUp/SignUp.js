import React, { Component } from 'react';

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="content">Are you a tutee, or a tutor?</div>
        <button type="button" onClick={() => this.props.history.push('/signup/tutor/')}>Tutor</button>
        <button type="button" onClick={() => this.props.history.push('/signup/tutee/')}>Tutee</button>
      </div>
    );
  }
}

export default SignUp;
