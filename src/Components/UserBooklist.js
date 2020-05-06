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
    let userBody = '';
    let userRows = '';
    let userHeading = '';

    bookHeading = (
      <TableRow className={styles.rowContainer}>
        <TableCell>Isbn</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    );

    bookRows = this.props.books.map((i) => <BookRow key={i} {...i} />);

    bookBody = (
      <Table>
        <TableHead>{booklist.book}</TableHead>
        <TableBody>{booklist.book}</TableBody>
      </Table>
    );

    if (userRows.length === 0) {
      return null;
    }
    return (
      <Fragment>
        <div className={styles.rowContainer} style={{textAlign: 'center'}}>
          {bookBody}
        </div>
      </Fragment>
    );

    export default withLocalize(UserBooklist);
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
