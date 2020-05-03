import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/Book';
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import AddBookForm from './AddBookForm';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme) => ({
  root: {
    '& .MuiTableCell-head': {
      fontSize: '1.25rem',
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

const UserBooklist = ({classes, ...props}) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.getAllBooks();
  }, []); //componentDidMount

  //toast msg.
  const {addToast} = useToasts();

  const onDelete = (id) => {
    if (window.confirm('Are you sure to delete this book?'))
      props.deleteBook(id, () => addToast('Deleted successfully', {appearance: 'info'}));
  };
  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <AddBookForm {...{currentId, setCurrentId}} />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Isbn</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.booklist.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.isbn}</TableCell>
                      <TableCell>{record.author}</TableCell>
                      <TableCell>{record.title}</TableCell>
                      <TableCell>
                        <ButtonGroup variant='text'>
                          <Button>
                            <EditIcon
                              color='primary'
                              onClick={() => {
                                setCurrentId(record.id);
                              }}
                            />
                          </Button>
                          <Button>
                            <DeleteIcon color='secondary' onClick={() => onDelete(record.id)} />
                          </Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  booklist: state.book.list,
});

const mapActionToProps = {
  getAllBooks: actions.getAll,
  deleteBook: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(UserBooklist));
