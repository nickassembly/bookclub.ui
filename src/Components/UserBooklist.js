import React, {Fragment, Component} from 'react';
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
import {Translate, withLocalize} from 'react-localize-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

type Props = {
  books: Array<{}>,
};

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

class UserBooklist extends Component<Props, *> {
  componentDidMount() {
    this.props.getAllBooks();
  }
  render() {
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
  }
}

const mapStateToProps = (state) => ({
  booklist: state.books.list,
});

const mapActionToProps = {
  getAllBooks: actions.getAll,
  deleteBook: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(UserBooklist));
