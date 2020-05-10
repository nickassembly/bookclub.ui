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

class UserBooklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      books: [],
    };
  }

  async componentDidMount() {
    const url = 'https://bookclubapi.azurewebsites.net/api/v1/books';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({book: data, loading: false});
  }

  render() {
    let bookBody = '';
    let bookRows = '';
    let bookHeading = '';
    bookHeading = (
      <TableRow className={styles.rowContainer}>
        <TableCell>Isbn</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    );

    bookBody = (
      <Table>
        <TableHead>{bookHeading}</TableHead>
        <TableBody>{bookRows}</TableBody>
      </Table>
    );

    // if (bookRows.length === 0) {
    //   return null;
    // }

    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <Fragment>
            <div className={styles.rowContainer} style={{textAlign: 'center'}}>
              {bookBody}
              {this.state.book.map((book) => (
                <TableRow>
                  <div key={book.id}>
                    <TableCell> {book.isbn} </TableCell>
                    <TableCell> {book.author} </TableCell>
                    <TableCell> {book.title} </TableCell>
                  </div>
                </TableRow>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withLocalize(UserBooklist);
