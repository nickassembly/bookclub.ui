import React, {Fragment, Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UserRow from './UserRow';
import styles from './UserRow.css';

type Props = {
  books: [],
};

class UserBooklist extends Component {
  render() {
    let bookBody = '';
    let bookRows = '';
    let bookHeading = '';
    bookHeading = (
      <TableRow>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
      </TableRow>
    );

    // bookRows = this.props.books.map((book) => <UserRow key={book.id} {...book} />);

    bookBody = (
      <Table>
        <TableHead>{bookHeading}</TableHead>
        <TableBody>{bookRows}</TableBody>
      </Table>
    );

    if (bookRows.length === 0) {
      return null;
    }
    return (
      <Fragment>
        <div>{bookBody}</div>
      </Fragment>
    );
  }
}

export default withLocalize(UserBooklist);
