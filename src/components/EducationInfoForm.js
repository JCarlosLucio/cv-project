import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/EducationInfoFormStyles';

function EducationInfoForm({
  school,
  title,
  date,
  handleChange,
  handleSubmit,
  classes,
}) {
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Typography component="h1" variant="h5">
        Edit Education
      </Typography>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="school"
            name="school"
            label="School"
            value={school}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={8} sm={8}>
          <TextField
            required
            id="title"
            name="title"
            label="Title"
            value={title}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="date"
            name="date"
            label="Date"
            value={date}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="secondary" size="small">
        Submit
      </Button>
    </form>
  );
}

export default withStyles(styles)(EducationInfoForm);
