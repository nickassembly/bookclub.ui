import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import UserBooklist from './Components/UserBooklist';
import {ToastProvider} from 'react-toast-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
          <div className='container'>
            <UserBooklist />
          </div>
  );
}

export default App;
