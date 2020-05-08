import React, {Fragment, Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import UserRow from './UserRow';
import Axios from 'axios';
import styles from './UserRow.css';
import {getJwt} from '../Helpers/Jwt';

type Props = {
  books: [book],
};

class UserBooklist extends Component {
  componentDidMount() {
    Axios.get('https://bookclubapi.azurewebsites.net/api/v1/books', {
      // headers: {Authorization: `bearer ${jwt}`},
    }).then((res) =>
      this.setState({
        books: res.data,
      })
    );
  }

  render() {
    let bookBody = '';
    let bookRows = '';
    let bookHeading = '';

    bookHeading = (
      <TableRow>
        <TableCell>Isbn</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Title</TableCell>
      </TableRow>
    );

    // bookRows = this.props.books.map((book) => <UserRow key={book.id} {...book} />);
    bookRows = <UserRow></UserRow>;

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
