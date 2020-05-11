import React, {Fragment, Component} from 'react';

class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <TextField
              name='isbn'
              variant='outlined'
              label='Isbn'
              value={values.isbn}
              onChange={handleInputChange}
              {...(errors.isbn && {error: true, helperText: errors.isbn})}
            />
            <TextField
              name='author'
              variant='outlined'
              label='Author'
              value={values.author}
              onChange={handleInputChange}
              {...(errors.author && {error: true, helperText: errors.author})}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name='title'
              variant='outlined'
              label='Title'
              value={values.title}
              onChange={handleInputChange}
              {...(errors.title && {error: true, helperText: errors.title})}
            />

            <div>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                className={classes.smMargin}>
                Submit
              </Button>
              <Button variant='contained' className={classes.smMargin} onClick={resetForm}>
                Reset
              </Button>
            </div>
          </Grid>
        </Grid>
      </Form>
    );
  }
}

export default AddBookForm;
