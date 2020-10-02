import React, { Component } from 'react';
import EducationInfoForm from './EducationInfoForm';

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: 'Harvard',
      title: 'Chemical Engineering',
      date: '2019',
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEdit();
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
          <EducationInfoForm />
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
