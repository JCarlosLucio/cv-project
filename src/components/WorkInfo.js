import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import useInputComplexState from '../hooks/useInputComplexState';
import useToggleState from '../hooks/useToggleState';
import WorkInfoForm from './WorkInfoForm';
import styles from '../styles/WorkInfoStyles';

function WorkInfo({ classes }) {
  const [workInfo, handleChange] = useInputComplexState({
    company: 'Dell Technologies',
    position: 'Front-End Developer',
    tasks:
      'Determining the structure and design of web pages. Developing features to enhance the user experience. Ensuring web design is optimized for smartphones',
    startDate: '01/2017',
    endDate: '03/2020',
  });

  const [isEditing, toggleEdit] = useToggleState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  const { company, position, tasks, startDate, endDate } = workInfo;

  return (
    <React.Fragment>
      {isEditing ? (
        <WorkInfoForm
          company={company}
          position={position}
          tasks={tasks}
          startDate={startDate}
          endDate={endDate}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className={classes.root}>
          <Typography component="h1" variant="h5">
            Experience
          </Typography>
          <Typography variant="subtitle2">Company</Typography>
          <Typography>{company}</Typography>
          <Typography variant="subtitle2">Start Date - End Date</Typography>
          <Typography>
            {startDate} - {endDate}
          </Typography>
          <Typography variant="subtitle2">Position</Typography>
          <Typography>{position}</Typography>
          <Typography variant="subtitle2">Tasks</Typography>
          <Typography>{tasks}</Typography>
          <IconButton
            color="secondary"
            size="small"
            onClick={toggleEdit}
            className={classes.editBtn}
          >
            <EditIcon />
          </IconButton>
        </div>
      )}
    </React.Fragment>
  );
}

export default withStyles(styles)(WorkInfo);
