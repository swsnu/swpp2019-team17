import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';

// containers
import Login from './containers/Login/Login';
import Signup from './components/Login/Signup'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
