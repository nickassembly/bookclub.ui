import React from 'react';
import MainPage from './Pages/Main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import Protected from './Components/ProtectedComponent';
import AuthenticatedComponent from './Components/AuthenticatedComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={Login} />
        <Route path='/' exact component={MainPage} />
        <AuthenticatedComponent>
          <Route path='/Protected' component={Protected} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
