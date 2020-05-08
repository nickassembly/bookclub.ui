import React, {Component} from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import styles from './UserRow.css';

type Props = {
  isbn: string,
  author: string,
  title: string,
};

export default class UserRow extends Component {
  render() {
    const {isbn, author, title} = this.props;

    return (
      <TableRow className={styles.rowContainer}>
        <TableCell>{isbn}</TableCell>
        <TableCell>{author}</TableCell>
        <TableCell>{title}</TableCell>
      </TableRow>
    );
  }
}
