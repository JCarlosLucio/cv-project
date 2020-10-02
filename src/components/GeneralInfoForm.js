import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    margin: '1rem 0',
  },
});

function GeneralInfoForm({
  fName,
  lName,
  email,
  phone,
  handleChange,
  handleSubmit,
  classes,
}) {
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <Avatar className={classes.avatar} />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fName"
            name="fName"
            label="First name"
            value={fName}
            onChange={handleChange}
            color="secondary"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lName"
            name="lName"
            label="Last name"
            value={lName}
            onChange={handleChange}
            color="secondary"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            value={phone}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}

export default withStyles(styles, { withTheme: true })(GeneralInfoForm);
