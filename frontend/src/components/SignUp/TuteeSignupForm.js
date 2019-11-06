import React, { Component } from 'react';
import Select from 'react-select'
import AvailableTimes from 'react-available-times'

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
          Name
          <input
            className="child-name-input"
            onChange={(e) => this.props.onChangeName(e.target.value, this.props.id)}
            value={this.props.name}
          />
        </label>
        <label className="subject-label">
          subject
          <Select options={options} closeMenuOnSelect={false} isMulti={true} onChange={(selectedoptions) => this.props.onChangeSubject(selectedoptions, this.props.id)}/>
        </label>
        <label>
          age
          <input></input>
        </label>
        <label>available time</label>
        <AvailableTimes height={600} />
        <button onClick={() => this.props.onClickDelete(this.props.id)}>delete</button>
      </div>
    )
  }
}

export default (TuteeSignupForm);
