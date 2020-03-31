import React from 'react';
import MainPage from './Pages/Main';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={Login} />
        <Route path='/' exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
