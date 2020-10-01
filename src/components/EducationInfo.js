import React, { Component } from 'react';

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: 'Harvard',
      title: 'Chemical Engineering',
      date: '2019',
      isEditing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const { school, title, date, isEditing } = this.state;
    return (
      <div>
        <h1>Education</h1>
        {isEditing ? (
          <p>Editing</p>
        ) : (
          <div>
            <p>{school}</p>
            <p>{title}</p>
            <p>{date}</p>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default EducationInfo;
