import React, { Component } from 'react'


class TuteeSignupForm extends Component {
  render() {
    return (
      <div>
        <label className="child-name-label">Name:</label>
        <input
          className="child-name-input"
          onChange={e => this.props.onChangeName(e.target.value, this.props.id)}
          value={this.props.name}
        />
        <button onClick={e => this.props.onClickDelete(this.props.id)}>delete</button>
        {/* <label className="child-birthday-label">Birthday</label>
          <DatePicker
            onChange={this.setBirthday}
            value={this.state.birthday}
          /> */}
      </div>
    )
  }
}

export default TuteeSignupForm;