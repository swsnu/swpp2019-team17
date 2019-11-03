import React, { Component } from 'react';
import DatePicker from 'react-date-picker'

import Address from '../Address/address';
import ChildItems from './ChildItems';

import { connect } from 'react-redux';
import actionCreators from '../../redux'; // plz check... first time at ducks...


class SignUpTutee extends Component {

  state = {
    id: '',
    password: '',
    phone: '',
    childList: [],
    cihldListSize: 0,
    childName: '',
    childBirthday: new Date()
  }

  setBirthday = childBirthday => {
    this.setState({
      childBirthday
    });
  };

  addChild = () => {
    const { childList, cihldListSize } = this.state;

    let newChild = {
      id: this.state.cihldListSize + 1,
      name: this.state.childName,
      birthday: this.state.childBirthday
    }

    this.setState({ childList: childList.concat(newChild), cihldListSize: cihldListSize + 1 })
  }

  render() {
    let childItems = this.state.childList.map((item) => {
      return (<ChildItems
        key={item.id}
        name={item.name}
        birthday={item.birthday.getMonth()} />);
    });
    
    return (
      <div>
        <div>
          tutee signup input
          <Address />
        </div>
        <div className="tutee-information-div">
          <label className="tutee-id-label">ID</label>
          <input className="tutee-id-input" type="text"
            onChange={(event) => this.setState({id: event.target.value})} />
          <label>Password</label>
          <input className="tutee-password-input" type="password"
            onChange={(event) => this.setState({password: event.target.value})} />
          <label>Phone</label>
          <input className="tutee-phone-input" type="text"
            onChange={(event) => this.setState({phone: event.target.value})}/>
        
        </div>
        <div className="child-input-div">
          <h3 className="child-h3">Child</h3>

          <label className="child-name-label">Name:</label>
          <input className="child-name-input"
            onChange={(event) => this.setState({childName: event.target.value})}/><br/>

          <label className="child-birthday-label">Birthday</label>
          <DatePicker
          onChange={this.setBirthday}
          value={this.state.birthday}
        />

          <button type="button" onClick={() => this.addChild()}>Add</button>
        </div>
        <div className="child-list-container-div">
          {childItems}
          <button type="button">Confirm</button>
        </div>
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