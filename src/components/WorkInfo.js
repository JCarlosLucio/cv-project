import React, { Component } from 'react';

export class WorkInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'Papa Johns',
      position: 'Potato Specialist',
      tasks: 'Write emails, Rate potatoes',
      startDate: '01/2017',
      endDate: '03/2020',
      isEditing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const {
      company,
      position,
      tasks,
      startDate,
      endDate,
      isEditing,
    } = this.state;
    return (
      <div>
        {isEditing ? (
          <p>Editing</p>
        ) : (
          <div>
            <h1>Work Experience</h1>
            <p>{company}</p>
            <p>{position}</p>
            <p>{tasks}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default WorkInfo;
