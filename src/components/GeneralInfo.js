import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import useInputComplexState from '../hooks/useInputComplexState';
import useToggleState from '../hooks/useToggleState';
import GeneralInfoForm from './GeneralInfoForm';
import styles from '../styles/GeneralInfoStyles';

function GeneralInfo({ classes }) {
  const [generalInfo, handleChange] = useInputComplexState({
    fName: 'John',
    lName: 'Smith',
    email: 'john.smith@email.com',
    phone: '(620) 454-1799',
  });

  const [isEditing, toggleEdit] = useToggleState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  const { fName, lName, email, phone } = generalInfo;

  return (
    <React.Fragment>
      {isEditing ? (
        <GeneralInfoForm
          fName={fName}
          lName={lName}
          email={email}
          phone={phone}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div className={classes.root}>
          <Avatar className={classes.avatar} />
          <Typography component="h1" variant="h4">
            {fName} {lName}
          </Typography>
          <Typography variant="subtitle2">Email</Typography>
          <Typography>{email}</Typography>
          <Typography variant="subtitle2">Phone Number</Typography>
          <Typography>{phone}</Typography>
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

export default withStyles(styles, { withTheme: true })(GeneralInfo);
