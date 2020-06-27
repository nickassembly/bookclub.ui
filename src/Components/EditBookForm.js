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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }
  state = {
    editFormShow: true,
    isbn: this.props.bookInfo.isbn,
    author: this.props.bookInfo.author,
    title: this.props.bookInfo.title,
    id: this.props.bookInfo.id
  };

  updateInputValue = (event, value, name) => {
    console.log(`name value: ${name}: ${value}`);
    this.setState({ [name]: value || event.target.value });
  };
  handleSubmit() {
    axios
    .put(`https://bookclubapi.azurewebsites.net/api/v1/books/${this.props.bookInfo.id}`, {

        author: this.state.author,
        title: this.state.title,
        isbn: this.state.isbn
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
                    value={this.state.isbn}
                    onChange={(event, value) => this.updateInputValue(event, value, "isbn")}
                  />
                  <TextField
                    name='author'
                    variant='outlined'
                    label='Author'
                    className={classes.inputs}
                    value={this.state.author}
                    onChange={(event, value) => this.updateInputValue(event, value, "author")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    className={classes.inputs}
                    value={this.state.title}
                    onChange={(event, value) => this.updateInputValue(event, value, "title")}
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
