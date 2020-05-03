import React, {useState, useEffect} from 'react';
import {
  Grid,
  TextField,
  withStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from '@material-ui/core';
import useForm from './useForm';
import {connect} from 'react-redux';
import * as actions from '../actions/Book';
import {useToasts} from 'react-toast-notifications';

const styles = (theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      minWidth: 230,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
});

const initialFieldValues = {
  isbn: '',
  author: '',
  title: '',
};

const AddBookForm = ({classes, ...props}) => {
  //toast msg.
  const {addToast} = useToasts();

  //validate()
  //validate({fullName:'jenny'})
  const validate = (fieldValues = values) => {
    let temp = {...errors};
    if ('isbn' in fieldValues) temp.isbn = fieldValues.isbn ? '' : 'This field is required.';
    if ('author' in fieldValues) temp.author = fieldValues.author ? '' : 'This field is required.';
    if ('title' in fieldValues) temp.title = fieldValues.title ? '' : 'This field is required.';

    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };

  const {values, setValues, errors, setErrors, handleInputChange, resetForm} = UseBookForm(
    initialFieldValues,
    validate,
    props.setCurrentId
  );

  //material-ui select
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const onSuccess = () => {
        resetForm();
        addToast('Submitted successfully', {appearance: 'success'});
      };
      if (props.currentId == 0) props.createBook(values, onSuccess);
      else props.updateBook(props.currentId, values, onSuccess);
    }
  };

  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.booklist.find((x) => x.id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  return (
    <form autoComplete='off' noValidate className={classes.root} onSubmit={handleSubmit}>
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
            <Button variant='contained' color='primary' type='submit' className={classes.smMargin}>
              Submit
            </Button>
            <Button variant='contained' className={classes.smMargin} onClick={resetForm}>
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state) => ({
  booklist: state.book.list,
});

const mapActionToProps = {
  createBook: actions.create,
  updateBook: actions.update,
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(AddBookForm));
