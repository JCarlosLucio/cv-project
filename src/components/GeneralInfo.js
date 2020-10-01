import React, { Component } from 'react';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'John',
      isEditing: false,
    };
  }

  render() {
    const { fullName, isEditing } = this.state;
    return (
      <div>
        <h1>General Information</h1>
        {isEditing ? <p>Editing</p> : <p>{fullName}</p>}
      </div>
    );
  }
}

export default GeneralInfo;
