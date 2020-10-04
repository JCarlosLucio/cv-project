import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import WorkInfoForm from './WorkInfoForm';
import styles from '../styles/WorkInfoStyles';

export class WorkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: 'Dell Technologies',
      position: 'Front-End Developer',
      tasks:
        'Determining the structure and design of web pages. Developing features to enhance the user experience. Ensuring web design is optimized for smartphones',
      startDate: '01/2017',
      endDate: '03/2020',
      isEditing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEdit();
  }

  render() {
    const {
      company,
      position,
      tasks,
      startDate,
      endDate,
      isEditing,
    } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
        {isEditing ? (
          <WorkInfoForm
            company={company}
            position={position}
            tasks={tasks}
            startDate={startDate}
            endDate={endDate}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div className={classes.root}>
            <Typography component="h1" variant="h5" gutterBottom>
              Experience
            </Typography>
            <Typography variant="subtitle2">Company</Typography>
            <Typography gutterBottom>{company}</Typography>
            <Typography variant="subtitle2">Start Date - End Date</Typography>
            <Typography gutterBottom>
              {startDate} - {endDate}
            </Typography>
            <Typography variant="subtitle2">Position</Typography>
            <Typography gutterBottom>{position}</Typography>
            <Typography variant="subtitle2">Tasks</Typography>
            <Typography gutterBottom>{tasks}</Typography>
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

export default withStyles(styles)(WorkInfo);
