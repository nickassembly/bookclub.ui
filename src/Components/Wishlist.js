import React, {Component} from 'react';
import Navbar from './Navbar';
import {Table} from 'react-bootstrap';
import Axios from 'axios';
import {getJwt} from '../Helpers/Jwt';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{}],
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    const jwt = getJwt();
    Axios.get(
      'https://cors-anywhere.herokuapp.com/https://bookclubapi.azurewebsites.net/api/v1/books',
      {headers: {Authorization: `bearer ${jwt}`}}
    ).then((res) =>
      this.setState({
        books: res.data,
      })
    );
  }

  // Need to figure out how to iterate through isbn, author, title and set key = id
  // these fields are on the api but when I try to set them in the constructor they are coming back undefined

  render() {
    const {books} = this.state;
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
            {books.map((books) => (
              <tr>
                <td>{books.data}</td>
                <td>{books.data}</td>
                <td>{books.data}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
