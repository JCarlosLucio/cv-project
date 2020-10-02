import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
