import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Store} from './actions/Store';
import {Provider} from 'react-redux';
import UserBooklist from './Components/UserBooklist';
import {Container} from '@material-ui/core';
import {ToastProvider} from 'react-toast-notifications';
import Login from './Components/Login';
import User from './Components/User';
import AuthenticatedComponent from './Components/AuthenticatedComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recommendations from './Components/Recommendations';
import Wishlist from './Components/Wishlist';

function App() {
  return (
    <Provider store={Store}>
      <ToastProvider autoDismiss={true}>
        <BrowserRouter>
          <div className='container'>
            <UserBooklist />
          </div>
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  );
}

export default App;
