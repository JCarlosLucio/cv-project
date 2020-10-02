import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: '1rem 0',
  },
};

function EducationInfoForm({
  school,
  title,
  date,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        School:
        <input name="school" value={school} onChange={handleChange} required />
      </label>
      <label>
        Title:
        <input name="title" value={title} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input name="date" value={date} onChange={handleChange} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default withStyles(styles)(EducationInfoForm);
