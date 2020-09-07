import React, {Component} from 'react';
import axios from 'axios';
import '../app.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit(e) {
    e.preventDefault();
    fetch('http://bookclubapi.azurewebsites.net/Users/authenticate');
    axios
      .post('http://bookclubapi.azurewebsites.net/Users/authenticate', {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        console.log('token received', JSON.stringify(res.data.token));
        // localStorage.setItem('cool-jwt', JSON.stringify(res.data.token));
        this.props.history.push('/user');
      });
  }

  render() {
    return (
      <div>
        <Form className='login-form' onSubmit={(e) => this.submit(e)}>
          <h1 className='text-center'>
            <span className='font-weight-bold'>Book Club</span>
          </h1>
          <h3 className='login-form-header text-center'>Scientia Potentia Est</h3>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type='text'
              name='username'
              placeholder='Username'
              onChange={(e) => this.change(e)}
              value={this.state.username}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type='password'
              name='password'
              placeholder='Password'
              onChange={(e) => this.change(e)}
              value={this.state.password}
            />
          </FormGroup>
          <Button className='btn-lg btn-dark btn-block' type='submit'>
            Log in
          </Button>
          <div className='text-center pt-3'>Or continue with your social account</div>
          <FacebookLoginButton className='mt-3 mb-3' />
          <div className='text-center'>
            <a href='/register'>Register</a>
            <span className='p-2'>|</span>
            <a href='/forgot-password'>Forgot Password</a>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
