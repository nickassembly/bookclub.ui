import React, {Component} from 'react';
import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
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
        <ModalHeader closeButton>
          <Button id='contained-modal-title-vcenter'>Add Book</Button>
        </ModalHeader>
        <ModalBody>
          <div className='container'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup controlId='BookIsbn'>
                <Label>Isbn</Label>
                <Form type='text' name='Isbn' required placeholder='Isbn' />
              </FormGroup>
              <FormGroup>
                <Button variant='primary' type='submit'>
                  Save
                </Button>
              </FormGroup>
            </Form>

            <FormGroup controlId='BookAuthor'>
              <Label>Author</Label>
              <Form type='text' name='Author' required placeholder='Author' />
            </FormGroup>

            <FormGroup controlId='BookTitle'>
              <Label>Title</Label>
              <Form type='text' name='Title' required placeholder='Title' />
            </FormGroup>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant='danger' onClick={this.props.onHide}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
