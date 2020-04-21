import React, {Component} from 'react';
import Navbar from './Navbar';
import {Table} from 'react-bootstrap';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    this.setState({
      books: [
        {Isbn: '0072223434', Author: 'King', Title: 'The Stand'},
        {Isbn: '0514333434', Author: 'Tolkien', Title: 'The Hobbit'},
      ],
    });
  }

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
              <tr key={books.bookId}>
                <td>{books.Isbn}</td>
                <td>{books.Author}</td>
                <td>{books.Title}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
