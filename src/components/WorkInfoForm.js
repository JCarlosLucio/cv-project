import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container: {
    margin: '0 0 1rem 0',
  },
};

function WorkInfoForm({
  company,
  position,
  tasks,
  startDate,
  endDate,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Company:
        <input
          name="company"
          value={company}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Position:
        <input
          name="position"
          value={position}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Tasks:
        <textarea name="tasks" value={tasks} onChange={handleChange} required />
      </label>
      <label>
        Start Date:
        <input
          name="startDate"
          value={startDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        End Date:
        <input
          name="endDate"
          value={endDate}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default withStyles(styles)(WorkInfoForm);
