import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';

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

class EditBookForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  state = {
    editFormShow: true,
    bookInfo: this.props.bookInfo
  };

  handleChange(event) {
    const name = event.target.name;
    const field = `this.state.bookInfo.${name}`;
    this.setState({field: event.target.value});
  }

  updateInputValue(event) {
    const {
      target: {value},
    } = event;
    this.setState({bookInfo: value});
  }
  handleSubmit() {
    axios
      .put(`https://bookclubapi.azurewebsites.net/api/v1/books/${this.props.bookInfo.id}`, {
        author: this.state.bookInfo.author,
        title: this.state.bookInfo.title,
        isbn: this.state.bookInfo.isbn,
      })
      .then(function (response) {
        console.log(response);
      });
  }

  handleResetForm() {
    document.getElementById('editBookForm').reset();
  }

  handleHide() {
    this.setState({editFormShow: !this.state.editFormShow});
  }

  render() {
    const {classes} = this.props;
    const {editFormShow} = this.state;

    return (
      <div>
        {editFormShow && (
          <React.Fragment>
            <form id='editBookForm' onSubmit={this.handleSubmit}>
              <Grid container>
                <Grid item xs={6}>
                  <TextField
                    name='isbn'
                    variant='outlined'
                    id='standard-basic'
                    label='Isbn'
                    className={classes.inputs}
                    value={this.state.bookInfo.isbn}
                    onChange={this.updateInputValue}
                  />
                  <TextField
                    name='author'
                    variant='outlined'
                    label='Author'
                    className={classes.inputs}
                    value={this.state.bookInfo.author}
                    onClick={this.updateInputValue}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    className={classes.inputs}
                    value={this.state.bookInfo.title}
                    onClick={this.updateInputValue}
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

export default withStyles(styles, {withTheme: true})(EditBookForm);
