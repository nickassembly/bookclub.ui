import React, {Fragment, Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import BookRow from './BookRow.js';
import styles from './BookRow.css';
import Axios from 'axios';

import {getJwt} from '../Helpers/Jwt';

type Props = {
  books: Array<{}>,
  getAllBooks: () => {},
};

class UserBooklist extends Component<Props, *> {
  getAllBooks() {
    Axios.get('https://bookclubapi.azurewebsites.net/api/v1/books', {
      // headers: {Authorization: `bearer ${jwt}`},
    }).then((res) =>
      this.setState({
        books: res.books,
      })
    );
  }

  render() {
    let bookBody = '';
    let bookRows = '';
    let bookHeading = '';
    let book = this.getAllBooks();

    bookHeading = (
      <TableRow className={styles.rowContainer}>
        <TableCell>Isbn</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    );

    bookRows = this.props.books.map((books) => <BookRow key={book.id} {...books} />);

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
        <div className={styles.rowContainer} style={{textAlign: 'center'}}>
          {bookBody}
        </div>
      </Fragment>
    );
  }
}

export default withLocalize(UserBooklist);
