import React from 'react';
import MainPage from './Pages/Main';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AuthenticatedComponent from './Components/AuthenticatedComponent';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/Auth' component={AuthenticatedComponent} />
          <Route path='/' exact component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
