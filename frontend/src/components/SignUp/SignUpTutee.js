import React, { Component } from 'react';
import DatePicker from 'react-date-picker'

import Address from '../Address/address';
import ChildItems from './ChildItems';

class SignUpTutee extends Component {

  state = {
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
        <div className="child-check-container-div">
          {childItems}
        </div>
      </div>
    );
  }
}

export default SignUpTutee;
