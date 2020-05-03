import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Components/Login';
import User from './Components/User';
import AuthenticatedComponent from './Components/AuthenticatedComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recommendations from './Components/Recommendations';
import Wishlist from './Components/Wishlist';

// TODO: Wire up AddBookForm and UserBooklist then refactor App.js

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Login} />
          <AuthenticatedComponent>
            <Route path='/user' component={User} />
            <Route path='/recommendations' component={Recommendations} />
            <Route path='/wishlist' component={Wishlist} />
          </AuthenticatedComponent>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
