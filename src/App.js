import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
    backgroundColor: theme.palette.grey[900],
    color: 'white',
  },
  paper: {
    margin: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
            <Avatar className={classes.avatar} />
            <Typography component="h1" variant="h5">
              CV Project
            </Typography>
            <Grid container component="section" spacing={3}>
              <Grid item xs={12} sm={12} md={12}>
                <GeneralInfo />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <EducationInfo />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <WorkInfo />
              </Grid>
            </Grid>
          </div>
          <Box mt={5}>
            <MadeBy />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
