import React, {Component} from 'react';
import {getJwt} from '../Helpers/Jwt';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    const jwt = getJwt();

    if (!jwt) {
      this.props.history.push('/Login');
    }

    axios
      .get(
        // Not sure why /books is needed here, I have tried /login endpoint but that keeps bringing me to the login screen
        // the login endpoint is a Post so maybe I need to change that or handle it differently.
        'https://bookclubapi.azurewebsites.net/api/v1/books',
        {headers: {Authorization: `bearer ${jwt}`}}
      )
      .then((res) =>
        this.setState({
          user: res.data,
        })
      )
      .catch((err) => {
        localStorage.removeItem('cool-jwt');
        this.props.history.push('/Login');
      });
  }

  // todo: change to be a landing page for a specific user
  // todo: add Registration to create new users
  // todo: admin panel to remove users?

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    }

    return <div>{this.props.children}</div>;
  }
}
export default withRouter(AuthenticatedComponent);
