import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/WorkInfoFormStyles';

function WorkInfoForm({
  company,
  position,
  tasks,
  startDate,
  endDate,
  handleChange,
  handleSubmit,
  classes,
}) {
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Typography component="h1" variant="h5">
        Edit Experience
      </Typography>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="company"
            name="company"
            label="Company"
            value={company}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="startDate"
            name="startDate"
            label="Start Date"
            value={startDate}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="endDate"
            name="endDate"
            label="End Date"
            value={endDate}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="position"
            name="position"
            label="Position"
            value={position}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="tasks"
            name="tasks"
            label="Tasks"
            value={tasks}
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

export default withStyles(styles)(WorkInfoForm);
