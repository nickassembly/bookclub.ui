import React, {Fragment, Component} from 'react';
import {withLocalize} from 'react-localize-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import {makeStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
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
      <TableRow>
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

    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <Fragment>
            <h1> Book Want List</h1>
            <TableContainer component={Paper}>
              <Table size='small' aria-label='a dense table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Isbn </TableCell>
                    <TableCell align='center'>Author</TableCell>
                    <TableCell align='center'>Title</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.book.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>
                        <Checkbox inputProps={{'aria-label': 'uncontrolled-checkbox'}} />
                      </TableCell>
                      <TableCell align='center' component='th' scope='row'>
                        {book.isbn}
                      </TableCell>
                      <TableCell align='center'>{book.author}</TableCell>
                      <TableCell align='center'>{book.title}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button>Add Book</button>
            <button>Delete Book</button>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withLocalize(UserBooklist);
