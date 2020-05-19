import React, {Fragment, Component} from 'react';
import {Grid} from '@material-ui/core';
import {Button} from '@material-ui/core';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: '',
      author: '',
      title: '',
      visibility: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <textField name='isbn' variant='outlined' label='Isbn' onChange={this.handleChange} />
            <textfield
              name='author'
              variant='outlined'
              label='Author'
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <textfield name='title' variant='outlined' label='Title' onChange={this.handleChange} />

            <div>
              <Button
                onClick={this.handleChange}
                variant='contained'
                color='primary'
                type='submit'
                value='Submit'>
                Submit
              </Button>
              <Button variant='contained'>Reset</Button>
            </div>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default AddBookForm;
