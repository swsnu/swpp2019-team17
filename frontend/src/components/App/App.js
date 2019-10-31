import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import './App.css';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import SignUpTutor from '../SignUp/SignUpTutor';
import SignUpTutee from '../SignUp/SignUpTutee';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signup/tutor" exact component={SignUpTutor} />
          <Route path="/signup/tutee" exact component={SignUpTutee} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
