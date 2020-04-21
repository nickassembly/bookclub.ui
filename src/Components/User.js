import React, {Component} from 'react';
import Navbar from './Navbar';

export default class User extends Component {
  render() {
    return (
      <div className=''>
        <Navbar />
        <h1 className='mt-5 d-flex justify-content-left'>Welcome to Book Club</h1>
      </div>
    );
  }
}
