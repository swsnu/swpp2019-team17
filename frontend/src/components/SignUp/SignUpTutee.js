import React, { Component } from 'react';
import DatePicker from 'react-date-picker'

import { connect } from 'react-redux';
import { array } from 'prop-types';
import Address from '../Address/address';
import TuteeSignupForm from './TuteeSignupForm'

// import actionCreators from '../../redux'; // plz check... first time at ducks...

class SignUpTutee extends Component {
  state = {
    id: '',
    password: '',
    phone: '',
    childList: [{ id: 0, name: '' }], // [{id:1, name: jack, ...}, {id: 2, name: park, ...}, ...]
    childID: 0,
    // childName: '',
    // childBirthday: new Date()
  }

  // setBirthday = childBirthday => {
  //   this.setState({
  //     childBirthday
  //   });
  // };

  addChild = () => {
    const newChild = {
      id: this.state.childID + 1,
      name: '',
      // birthday: this.state.childBirthday
    }

    this.setState({ childList: this.state.childList.concat(newChild), childID: this.state.childID + 1 })
  }

  ChangeName = (name, index) => {
    const copyState = this.state.childList;
    copyState[index].name = name;
    this.setState({ childList: copyState })
  }

  Delete = (index) => {
    const copyState = this.state.childList;
    copyState.splice(index, 1)
    this.setState({ childList: copyState })
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
          // birthday={item.birthday.getMonth()}
          onClickDelete={this.Delete}
        />
      );
    });

    return (
      <div>
        <div>
          tutee signup input
          <Address />
        </div>
        {/*
          <label className="child-birthday-label">Birthday</label>
          <DatePicker
            onChange={this.setBirthday}
            value={this.state.birthday}
          />

        </div> */}
        <div className="child-list-container-div">
          {tuteeSignupForms}
          <button type="button" onClick={() => this.addChild()}>Add</button>
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
