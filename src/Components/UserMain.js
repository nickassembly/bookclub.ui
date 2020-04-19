import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class UserMain extends Component {
  render() {
    return (
      <div className=''>
        <h1 className='mt-5 d-flex justify-content-left'>Welcome to Book Club</h1>

        <Button varient='primary'>React Bootstrap Btn</Button>
      </div>
    );
  }
}
