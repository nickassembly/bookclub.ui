import React from 'react';
import Login from './Components/Login';
import UserBookList from './Components/UserBooklist';
import AddBookForm from './Components/AddBookForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Cookies from 'js-cookie'

function App() {
  const isAuthenticated = Cookies.get('token') !== "";
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/userbooklist">My Books</Link></li>
            <li><Link to="/addbookform">Add Books</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Login} />
          {
            isAuthenticated ? 
            <>
            <Route path="/userbooklist"  component={UserBookList} />
            <Route path="/addbookform"  component={AddBookForm} />
            </>
            : <Redirect to="/" />
          }
        </Switch>
      </main>
    </Router>
  );
}

export default App;
