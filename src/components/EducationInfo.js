import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import EducationInfoForm from './EducationInfoForm';
import styles from '../styles/EducationInfoStyles';

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: 'Massachusetts Institute of Technology',
      title: 'Software Engineering',
      date: '2019',
      isEditing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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
    const { school, title, date, isEditing } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        {isEditing ? (
          <EducationInfoForm
            school={school}
            title={title}
            date={date}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div className={classes.root}>
            <Typography component="h1" variant="h5" gutterBottom>
              Education
            </Typography>
            <Typography variant="subtitle2">School</Typography>
            <Typography gutterBottom>{school}</Typography>
            <Typography variant="subtitle2">Title of Study</Typography>
            <Typography gutterBottom>{title}</Typography>
            <Typography variant="subtitle2">Class</Typography>
            <Typography gutterBottom>{date}</Typography>
            <IconButton
              color="secondary"
              onClick={this.toggleEdit}
              className={classes.editBtn}
            >
              <EditIcon />
            </IconButton>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(EducationInfo);
