import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Store} from './actions/Store';
import {Provider} from 'react-redux';
import UserBooklist from './Components/UserBooklist';
import {ToastProvider} from 'react-toast-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';

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
