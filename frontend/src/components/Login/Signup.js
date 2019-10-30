import React, { Component } from 'react';
import Popup from 'reactjs-popup';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'ready',
    }
  }

  render() {
    let signupform = null;
    if (this.state.mode === 'ready') {
      signupform =
        <div>
          <div className="content">Are you a tutee, or a tutor?</div>
          <button type="button" onClick={() => this.setState({ mode: 'tutor' })}>Tutor</button>
          <button type="button" onClick={() => this.setState({ mode: 'tutee' })}>Tutee</button>
        </div>
    } else if (this.state.mode === 'tutee') {
      signupform = 
        <div>for tutee</div>
    } else {
      signupform = 
        <div>for tutor</div>
    }
    return (
      <div>
        {signupform}
      </div>
    )
  }
}

export default Signup;