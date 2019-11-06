import React, { Component } from 'react';
import Select from 'react-select'
import AvailableTimes from 'react-available-times'
import './TuteeSignupForm.css';

class TuteeSignupForm extends Component {
  constructor() {
    super();
  }
  render() {
    const options = [
      { value: 'korean', label: 'Korean' },
      { value: 'math', label: 'Math' },
      { value: 'english', label: 'English' },
      { value: 'science', label: 'Science' },
      { value: 'social study', label: 'Social Study' },
    ]
    return (
      <div>
        <label className="child-name-label">
          Name:
          <input
            className="child-name-input"
            onChange={(e) => this.props.onChangeName(e.target.value, this.props.id)}
            value={this.props.name}
          />
        </label>
        <br/>
        <label className="subject-label">


          <div className="select">
          Subject:
          <Select options={options} closeMenuOnSelect={false} isMulti={true} onChange={(selectedoptions) => this.props.onChangeSubject(selectedoptions, this.props.id)}/>
          </div>
        </label>
        <br/>
        <label>
          Age:
          <input></input>
        </label>
        <br/>
        <label>gender
          <Select options={[{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }]}></Select>
        </label>
        <br/>
        <label>available time</label>
        <div className="timetable">
        <AvailableTimes height={600} />
        </div>
        <div className="delete">
        {this.props.id != 0 ? <button onClick={() => this.props.onClickDelete(this.props.id)}>delete</button> : null}
        </div>
      </div>
    )
  }
}

export default (TuteeSignupForm);
