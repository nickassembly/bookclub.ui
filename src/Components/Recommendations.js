import React, {Component} from 'react';
import Navbar from './Navbar';

export default class Recommendations extends Component {
  render() {
    return (
      <div className=''>
        <Navbar />
        <h1 className=''>Books, Authors or Series that you recommend</h1>
      </div>
    );
  }
}
