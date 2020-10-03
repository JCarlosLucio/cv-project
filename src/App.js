import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkInfo from './components/WorkInfo';
import MadeBy from './components/MadeBy';

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  info: {
    backgroundColor: 'white',
  },
  paper: {
    margin: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={3} sm={4} md={5} className={classes.image} />
        <Grid
          item
          xs={9}
          sm={8}
          md={7}
          className={classes.info}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Grid container component="section">
              <Grid item xs={12} sm={12} md={12}>
                <GeneralInfo />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <EducationInfo />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <WorkInfo />
              </Grid>
            </Grid>
            <Box mt={5}>
              <MadeBy />
            </Box>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
