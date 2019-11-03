import React, { Component } from 'react';

class SignUpTutor extends Component {
  state = {
    id: '',
    password: '',
    certificate: null
  };

  handleFileUpload = () => {

  };

  render() {
    return (
      <div className="signuptutor-div">
        <div className="signuptutor-div-input">
          <label className="signuptutor-label-id">ID</label>
          <input type="text" className="signuptutor-input-id"
            onChange={(event) => this.setState({id: event.target.value})} />
          <label className="signuptutor-label-password">Password</label>
          <input type="password" className="signuptutor-input-password"
            onChange={(event) => this.setState({password: event.target.value})}/>
          
          <label className="signuptutor-label-certificate">Certificate</label>
          <input type="file" className="signuptutor-input-certificate"
            onChange={event => this.handleFileUpload(event)} />
        </div>
      </div>
    );
  }
}

export default SignUpTutor;
