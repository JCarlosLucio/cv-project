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
  }

  render() {
    const { school, title, date, isEditing } = this.state;
    return (
      <div>
        <h1>Education</h1>
        <div>
          <p>{school}</p>
          <p>{title}</p>
          <p>{date}</p>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
