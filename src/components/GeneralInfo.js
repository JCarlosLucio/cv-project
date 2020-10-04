import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import GeneralInfoForm from './GeneralInfoForm';
import styles from '../styles/GeneralInfoStyles';

export class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: 'John',
      lName: 'Smith',
      email: 'john.smith@email.com',
      phone: '(620) 454-1799',
      isEditing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEdit();
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const { fName, lName, email, phone, isEditing } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        {isEditing ? (
          <GeneralInfoForm
            fName={fName}
            lName={lName}
            email={email}
            phone={phone}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div className={classes.root}>
            <Avatar className={classes.avatar} />
            <Typography component="h1" variant="h4" gutterBottom>
              {fName} {lName}
            </Typography>
            <Typography variant="subtitle2">Email</Typography>
            <Typography gutterBottom>{email}</Typography>
            <Typography variant="subtitle2">Phone Number</Typography>
            <Typography gutterBottom>{phone}</Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={this.toggleEdit}
              className={classes.editBtn}
            >
              <EditIcon />
            </Button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(GeneralInfo);
