import React, { Component } from 'react';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'John',
    };
  }

  render() {
    const { fullName } = this.state;
    return (
      <div>
        <h1>General Information</h1>
        <p>{fullName}</p>
      </div>
    );
  }
}

export default GeneralInfo;
