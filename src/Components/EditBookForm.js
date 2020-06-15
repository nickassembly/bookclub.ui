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
    this.state = {
      bookInfo: {
        isbn: '',
        author: '',
        title: '',
      },
      editFormShow: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .put('https://bookclubapi.azurewebsites.net/api/v1/books', {
        author: this.state.author,
        title: this.state.title,
        isbn: this.state.isbn,
      })
      .then(function (response) {
        console.log(response);
      });
  }

  handleResetForm(event) {
    document.getElementById('editBookForm').reset();
  }

  handleHide() {
    this.setState({editFormShow: !this.state.editFormShow});
  }

  handleChangeIsbn(event) {
    const bookInfo = this.state.bookInfo;
    bookInfo.isbn = event.target.value;
    this.setState({bookInfo: bookInfo});
  }

  handleChangeAuthor(event) {
    const bookInfo = this.state.bookInfo;
    bookInfo.author = event.target.value;
    this.setState({bookInfo: bookInfo});
  }

  handleChangeTitle(event) {
    const bookInfo = this.state.bookInfo;
    bookInfo.title = event.target.value;
    this.setState({bookInfo: bookInfo});
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
                    defaultValue={this.props.isbn}
                    variant='outlined'
                    id='standard-basic'
                    label='ISBN'
                    className={classes.inputs}
                    onChange={this.handleChangeIsbn.bind(this)}
                    value={this.state.bookInfo.isbn}
                  />
                  <TextField
                    name='author'
                    variant='outlined'
                    label='Author'
                    className={classes.inputs}
                    onChange={this.handleChangeAuthor.bind(this)}
                    value={this.state.bookInfo.author}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    className={classes.inputs}
                    onChange={this.handleChangeTitle.bind(this)}
                    value={this.state.bookInfo.title}
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
