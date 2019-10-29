import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import './App.css';

// containers
import Login from './containers/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" exact render={() => <Login />} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
