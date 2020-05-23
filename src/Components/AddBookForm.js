import React, {Fragment, Component} from 'react';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {
        isbn: '',
        author: '',
        title: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({});
  };

  handleSubmit(event) {
    this.props.addBookWithUsername(this.state.book)
    event.preventDefault();
  };

  handleResetForm(event) {
    this.setState({isbn: '', title: ''})
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <TextField name='isbn' variant='outlined' label='ISBN' onChange={this.handleChange} />
            <TextField name='author' variant='outlined' label='Author' onChange={this.handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField name='title' variant='outlined' label='Title' onChange={this.handleChange} />
            <div>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                value='Submit'>
                Submit
              </Button>
              <Button variant='contained' onClick={this.handleResetForm}>Reset</Button>
            </div>
          </Grid>
        </Grid>
      </form>
      </React.Fragment>
    );
  }
}

export default AddBookForm;
