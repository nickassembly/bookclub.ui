import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export default class AddBookModal extends Component {
  handleSubmit(event) {
    event.preventDefault();

    alert(event.target.Isbn.value);
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
