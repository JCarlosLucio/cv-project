import React, { Component } from 'react';
import GeneralInfoForm from './GeneralInfoForm';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'John Smith',
      email: 'smith@email.com',
      phone: '01 800 123 4567',
      isEditing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { fullName, email, phone, isEditing } = this.state;
    return (
      <div>
        <h1>General Information</h1>
        {isEditing ? (
          <GeneralInfoForm
            fullName={fullName}
            email={email}
            phone={phone}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div>
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
