import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';
import Cookies from 'js-cookie';

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
      userName: Cookies.get('userId'),
      token: `Bearer ${Cookies.get('token')}`,
      addFormShow: true,
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
      .post(
        'https://bookclubapi.azurewebsites.net/api/v1/books',
        {
          author: this.state.author,
          title: this.state.title,
          isbn: this.state.isbn,
        },
        {headers: {Authorization: this.state.token}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
                    value={this.state.value}
                    variant='outlined'
                    id='standard-basic'
                    label='ISBN'
                    className={classes.inputs}
                    onChange={this.handleChange}
                  />
                  <TextField
                    name='author'
                    value={this.state.value}
                    variant='outlined'
                    label='Author'
                    className={classes.inputs}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name='title'
                    value={this.state.value}
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
