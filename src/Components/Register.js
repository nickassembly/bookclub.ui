import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
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

    axios
      .post('https://bookclubapi.azurewebsites.net/api/v1/identity/register', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        // localStorage.setItem('cool-jwt', JSON.stringify(res.data.token));
        this.props.history.push('/user');
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message
        })
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
            <Label>Email</Label>
            <Input
              type='text'
              name='email'
              placeholder='Email'
              onChange={(e) => this.change(e)}
              value={this.state.email}
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
          <div className='error'>
            {this.state.errorMessage}
          </div>
          <Button className='btn-lg btn-dark btn-block' type='submit'>
            Register
          </Button>
          <div className='text-center pt-3'>Or continue with your social account</div>
          <FacebookLoginButton className='mt-3 mb-3' />
        </Form>
      </div>
    );
  }
}

export default Login;
