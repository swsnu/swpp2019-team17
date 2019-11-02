import React, { Component } from 'react';
import Address from '../Address/address';

class SignUpTutee extends Component {
  state = {
    childList: [],
    childName: '',
    childBirth: '',
  }

  render() {
    return (
      <div>
        <div>
          tutee signup input
          <Address />
        </div>
        <div className="childForm">
          // 여기에다가 값 넣을거임
          <button type="button">Add</button>
        </div>
      </div>
    );
  }
}

export default SignUpTutee;
