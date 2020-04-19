import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './Components/Login';
import UserMain from './Components/UserMain';
import AuthenticatedComponent from './Components/AuthenticatedComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={Login} />
        <Route path='/' exact component={Main} />
        <AuthenticatedComponent>
          <Route path='/protected' component={UserMain} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
