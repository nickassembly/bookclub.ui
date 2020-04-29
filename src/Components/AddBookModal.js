import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import {getJwt} from '../Helpers/Jwt';

export default class AddBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: null,
      isbn: '',
      author: '',
      title: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const jwt = getJwt();
    fetch('https://bookclubapi.azurewebsites.net/api/v1/books', {
      method: 'POST',
      headers: {
        Authorization: 'bearer ' + getJwt(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookId: null,
        isbn: event.target.isbn.value,
        author: event.target.author.value,
        title: event.target.title.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert('failed');
        }
      );
  }

  render() {
    return (
      <Modal {...this.props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId='BookIsbn'>
                    <Form.Label>Isbn</Form.Label>
                    <Form.Control type='text' name='Isbn' required placeholder='Isbn' />
                  </Form.Group>
                  <Form.Group>
                    <Button variant='primary' type='submit'>
                      Save
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
              <Col sm={6}>
                <Form.Group controlId='BookAuthor'>
                  <Form.Label>Author</Form.Label>
                  <Form.Control type='text' name='Author' required placeholder='Author' />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId='BookTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' name='Title' required placeholder='Title' />
            </Form.Group>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='danger' onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
