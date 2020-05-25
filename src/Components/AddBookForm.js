import React, {Fragment, Component} from 'react';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: 10,
  },
  inputs: {
    margin: 10,
  },
});

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {
        isbn: '',
        author: '',
        title: '',
      },
      addFormShow: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleChange(event) {
    this.setState({});
  }

  handleSubmit(event) {
    this.props.addBookWithUsername(this.state.book);
    event.preventDefault();
  }

  handleResetForm(event) {
    document.getElementById('addBookForm').reset();
  }

  handleHide() {
    this.setState({addFormShow: !this.state.addFormShow});
  }

  render() {
    const {classes} = this.props;
    const {addFormShow} = this.state;
    return (
      <div>
        {addFormShow && (
          <React.Fragment>
            <form id='addBookForm' onSubmit={this.handleSubmit}>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    name='isbn'
                    variant='outlined'
                    id='standard-basic'
                    label='ISBN'
                    className={classes.inputs}
                    onChange={this.handleChange}
                  />
                  <TextField
                    name='author'
                    variant='outlined'
                    label='Author'
                    className={classes.inputs}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    className={classes.inputs}
                    onChange={this.handleChange}
                  />
                  <div>
                    <Button
                      variant='contained'
                      className={classes.button}
                      color='primary'
                      type='submit'
                      value='Submit'>
                      Submit
                    </Button>
                    <Button
                      variant='contained'
                      className={classes.button}
                      onClick={this.handleResetForm}>
                      Reset
                    </Button>
                    <Button
                      variant='contained'
                      className={classes.button}
                      onClick={() => this.handleHide()}>
                      Cancel
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </form>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(AddBookForm);
