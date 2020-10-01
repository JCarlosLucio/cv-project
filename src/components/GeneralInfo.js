import React, { Component } from 'react';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'John',
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
    const { fullName, isEditing } = this.state;
    return (
      <div>
        <h1>General Information</h1>
        {isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <input
              name="fullName"
              value={fullName}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>{fullName}</p>
            <button onClick={this.toggleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
