import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import useInputComplexState from '../hooks/useInputComplexState';
import useToggleState from '../hooks/useToggleState';
import EducationInfoForm from './EducationInfoForm';
import styles from '../styles/EducationInfoStyles';

function EducationInfo({ classes }) {
  const [educationInfo, handleChange] = useInputComplexState({
    school: 'Massachusetts Institute of Technology',
    title: 'Software Engineering',
    date: '2019',
  });

  const [isEditing, toggleEdit] = useToggleState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  const { school, title, date } = educationInfo;

  return (
    <React.Fragment>
      {isEditing ? (
        <EducationInfoForm
          school={school}
          title={title}
          date={date}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className={classes.root}>
          <Typography component="h1" variant="h5">
            Education
          </Typography>
          <Typography variant="subtitle2">School</Typography>
          <Typography>{school}</Typography>
          <Typography variant="subtitle2">Title of Study</Typography>
          <Typography>{title}</Typography>
          <Typography variant="subtitle2">Class</Typography>
          <Typography>{date}</Typography>
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

export default withStyles(styles)(EducationInfo);
