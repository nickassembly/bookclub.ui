import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import Cookies from 'js-cookie'
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieUser: Cookies.get('user'),
      username: '',
      password: '',
      userId: Cookies.get('userId'),
      token: Cookies.get('token') || "",
      redirect: false
    };
    this.change = this.change.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
    if (this.state.token !== "")  {
      console.log(`Token present ${this.state.token}`);
      this.state.redirect = true;
    }
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  attemptLogin() {
    const url = 'https://bookclubapi.azurewebsites.net/Users';
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    };
    axios.post(`${url}/authenticate`, userInfo)
    .then((response) => {
      Cookies.set('token',response.data.token, { expires: 365 });
      Cookies.set('user',response.data.username, { expires: 365 });
      Cookies.set('userId',response.data.id, { expires: 365 });
      this.setState({
        token: response.data.token,
        cookieUser: response.data.username,
        userId: response.data.id,
        redirect: true
      });
    })
    .catch(err => { console.log(err) })
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
       return <Redirect to='/userbooklist'/>;
     }
    return (
      <div>
        <Form className='login-form' >
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
          <Button className='btn-lg btn-dark btn-block' onClick={() => this.attemptLogin()}>
            Log in
          </Button>
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
