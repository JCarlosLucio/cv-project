import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function GeneralInfoForm({
  fName,
  lName,
  email,
  phone,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fName"
            name="fName"
            label="First name"
            value={fName}
            onChange={handleChange}
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

export default GeneralInfoForm;
