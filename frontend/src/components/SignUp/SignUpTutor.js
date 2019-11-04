import React, { Component } from 'react';

class SignUpTutor extends Component {
  state = {
    id: '',
    password: '',
    certificate: null,
    isAuthorized: false
  };

  handleFileUpload = (event) => {
    const formData = new FormData();
    formData.append('file',  event.target.files[0]);

    this.setState({isAuthorized: true})
  };

  render() {
    
    let message = '';
    if (this.state.isAuthorized) {
      message = 'Your certified has been authorized!'
    }

    return (
      <div className="signuptutor-div">
        <div className="signuptutor-div-input">
          <label className="signuptutor-label-id">ID</label>
          <input type="text" className="signuptutor-input-id"
            onChange={(event) => this.setState({id: event.target.value})} />
          <label className="signuptutor-label-password">Password</label>
          <input type="password" className="signuptutor-input-password"
            onChange={(event) => this.setState({password: event.target.value})}/>
          
          <div className="signuptutor-div-authorize">
            <label className="signuptutor-label-certificate">Certificate</label>
            <input type="file" className="signuptutor-input-certificate"
              onChange={event => this.handleFileUpload(event)} />
            <p>{message}</p>
          </div>

        </div>
      </div>
    );
  }
}

export default SignUpTutor;
