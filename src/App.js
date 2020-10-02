import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkInfo from './components/WorkInfo';

export class App extends Component {
  render() {
    return (
      <div>
        <h1>CV PROJECT</h1>
        <GeneralInfo />
        <EducationInfo />
        <WorkInfo />
      </div>
    );
  }
}

export default App;
