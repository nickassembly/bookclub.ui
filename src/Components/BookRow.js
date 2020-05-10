import React, {Component} from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import styles from './BookRow.css';

export default class BookRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: '',
      author: '',
      title: '',
    };
  }

  render() {
    return (
      <TableRow className={styles.rowContainer}>
        <TableCell>{this.state.isbn}</TableCell>
        <TableCell>{this.state.author}</TableCell>
        <TableCell>{this.state.title}</TableCell>
      </TableRow>
    );
  }
}
