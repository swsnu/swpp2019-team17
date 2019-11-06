import React, { Component } from 'react';
import Select from 'react-select'
import AvailableTimes from 'react-available-times'
import './TuteeSignupForm.css';

class TuteeSignupForm extends Component {
  constructor(){
    super();
  }
  render() {
    const options = [
      { value: 'korean', label: 'Korean' },
      { value: 'math', label: 'Math' },
      { value: 'english', label: 'English' },
      { value: 'science', label: 'Science' },
      { value: 'society', label: 'Society' },
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
        <label>available time</label>
        <div className="timetable">
        <AvailableTimes height={600} />
        </div>
        <div className="delete">
        <button onClick={() => this.props.onClickDelete(this.props.id)}>delete</button>
        </div>
      </div>
    )
  }
}

export default (TuteeSignupForm);
