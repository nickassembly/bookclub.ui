import React, {Component} from 'react';
import Navbar from './Navbar';
import {Table} from 'reactstrap';
import Axios from 'axios';
import {getJwt} from '../Helpers/Jwt';
import {Button, ButtonToolbar} from 'reactstrap';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {books: [], addModalShow: false};
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    const jwt = getJwt();
    Axios.get('https://bookclubapi.azurewebsites.net/api/v1/books', {
      // headers: {Authorization: `bearer ${jwt}`},
    }).then((res) =>
      this.setState({
        books: res.data,
      })
    );
  }

  render() {
    const {books} = this.state;
    let addModalClose = () => this.setState({addModalShow: false});
    return (
      <div className=''>
        <Navbar />
        <Table className='mt-4' striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Isbn</th>
              <th>Author</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.isbn}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant='primary' onClick={() => this.setState({addModalShow: true})}>
            Add Book
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
